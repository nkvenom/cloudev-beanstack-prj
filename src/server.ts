import express, { Request, Response, Errback, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1: Done  IMPLEMENT A RESTFUL ENDPOINT
  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req: Request, res: Response) => {
    res.send("This is the root endpoint\ntry instead GET /filteredimage?image_url={{}}")
  });

  app.get("/filteredimage", async (req: Request, res: Response, next: NextFunction) => {
    const imageURL: string = req.query.image_url;

    if (!imageURL) {
      res.status(422);
      res.send({
        errors: [
          'image_url cannot be empty'
        ]
      });
      return;
    }

    let localPath: string = null;
    try {
      localPath = await filterImageFromURL(imageURL);
    }
    catch (e) {
      res.status(422);
      res.send({
        errors: [
          'Remote image not found or timeout'
        ]
      });
      return;
    }

    res.sendFile(localPath, (errCb: Errback) => {
      if (errCb) {
        next(errCb);
        return;
      }

      deleteLocalFiles([localPath]);
    });
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();