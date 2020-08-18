export const CameraSwagger = {
    name: "Camera",
    data: {
        CM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Price: {
                    minLength: 1,
                    title: "Price",
                    type: "integer",
                    format: "int64",
                },
                Megapixel: {
                    minLength: 1,
                    title: "Megapixel",
                    type: "integer",
                    format: "int64",
                },
                Description: {
                    minLength: 1,
                    title: "Description",
                    type: "string",
                },
            },
            required: ["Name"],
        },
        UM: {
            properties: {
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
            },
            required: ["Name", "Id"],
        },
    },
};
