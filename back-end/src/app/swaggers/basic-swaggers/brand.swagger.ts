export const BrandSwagger = {
    name: "Brand",
    data: {
        CM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
            },
            required: ["Name"],
        },
        UM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
            },
            required: ["Name", "Id"],
        },
    },
};
