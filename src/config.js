const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IU6v5BMgQ24ygId9ndzAx9FuH5qVoAH2EtWA4NISXhiLNYsEltM2EWRvOjeEQ79nyc7uUyrJNmxhNlqriIbDmbT00QPckGI09",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-wangyw",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://3knxl274th.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_3K8YIBtAJ",
        APP_CLIENT_ID: "3v7ks2rkbto6hvf2ub9miiquml",
        IDENTITY_POOL_ID: "us-east-1:d8981a9f-1e81-4ca7-870d-63f93471e6c2",
    },
};

export default config;