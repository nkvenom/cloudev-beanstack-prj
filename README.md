# Udagram Image Filtering Microservice

### Github URL
https://github.com/nkvenom/cloudev-beanstack-prj

### Service endpoint root
http://cloudevudagram-env.eba-7mqhfmev.us-east-1.elasticbeanstalk.com

### Example Usage
http://cloudevudagram-env.eba-7mqhfmev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://pics.me.me/rm-rf-node-modules-npm-install-rm-rf-node-modules-46673859.png

### Screenshot
The screenshots are in the deployment_screenshots folder

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

Extra: you must have the command zip installed

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```
