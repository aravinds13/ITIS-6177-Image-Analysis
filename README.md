# Image Analysis API using Azure Cognitive AI
## Why? 🤔

I wanted to develop a simplified REST API which uses the image analysis service offered by [Microsoft Azure Cognitive AI](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-image-analysis?tabs=3-2), with the goal of enhancing accessibility.

The focus is on eliminating the complexity and hassle associated with configuring the service.

(And, of course, to impress my professor as this serves as my final project ¯\\_(ツ)_/¯ )

## Built using 🔧

- Microsoft Azure Cognitive AI (Version [3.2](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/call-analyze-image?tabs=rest) and [4.0](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/how-to/call-analyze-image-40?pivots=programming-language-rest-api))
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [image-size](https://www.npmjs.com/package/image-size)

## Getting started
Let's go!

[Swagger](http://159.65.225.73:3000/docs/) documentation has been configured for this project and can be used to familiarize yourself with the API endpoints.

![Swagger UI](https://i.imgur.com/EcVqscX.png)

Alternatively, you can follow along to see how to use a tool like [Postman](https://www.postman.com/) to make the API calls.


### Prerequisites
- Postman
- That's it! :D

### Steps
1. Open Postman and create a new request.

![Postman New Request](https://i.imgur.com/HD7vEjA.png)

2. Enter the base URL along with the required endpoint. Change the request type to POST.

![Postman Change Request Type](https://i.imgur.com/vh5q66Q.png)

3. Navigate to Body and select *form-data*. Now add the key as "image" and change type to *File* from *Text*

![Postman Change File Type](https://i.imgur.com/t1I5I6v.png)

4. Click on *Select Files* under Values field and select an image (JPG, PNG, GIF, or BMP) from your system. Once selected, hit the Send button.

![Vibing Cat](https://s5.gifyu.com/images/SiWE9.gif)

5. And voila! You've got your first API reponse! 🎉

![Voila!](https://i.imgur.com/Xnjreoy.png)

### Sample Response
```json
{
    "caption": {
        "text": "a cat lying on a blanket",
        "confidence": 0.7403799891471863
    },
    "metadata": {
        "width": 480,
        "height": 320
    }
}
```






## Endpoints

**URL structure:**

    159.65.225.73:3000/<endpoint-here>

| Method | Endpoint | Description |
| :--------: | :------- | :------- |
| POST | /detect-colors | Detect dominant colors in an image. |
| POST | /detect-categories | Detect categories based on an image. |
| POST | /detect-objects | Detect objects in an image. |
| POST | /generate-caption | Generate caption for an image. |
| POST | /generate-tags | Generate tags for an image. |
| POST | /read-text | Read text from an image. |

## Limitations
- File format must be JPG, PNG, GIF, or BMP.
- Image resolution must be greater than 50x50 pixels and less than 16,000x16,000 pixels.
- File size must be within 4 megabytes (MB).
- Due to the current limitation in Azure free tier, the number of calls are limited to 10 per second.

### If you've reached till here, you're awesome! Thanks for taking the time to use my API 🙌🏻
