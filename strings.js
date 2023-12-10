// Defines all the strings used in the application

const statusCodes = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400
}

const errors = {
    NOT_FOUND : {
        status : statusCodes.NOT_FOUND,
        message : "Image missing in request. Make sure the key is \"image\" when sending the request." 
    },
    INVALID_FORMAT: {
        status: statusCodes.BAD_REQUEST,
        message: "Invalid file format. The format needs to be jpg, png, gif, or bmp."
    },
    INVALID_RESOLUTION: {
        status: statusCodes.BAD_REQUEST,
        message: "Image resolution must be in the range of 50x50 pixels and 16000x16000 pixels."
    },
    UNSUPPORTED_FILE_SIZE: {
        status: statusCodes.BAD_REQUEST,
        message: "File size too big. Image must be less than 4 megabytes (MB)."
    }
}

module.exports = {errors, statusCodes};
