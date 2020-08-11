export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HEeFGIK4UHRiSs0goXBNin8MBDsYrMNOPkyFuezuyWoOXEHkJsSOrkBEr3m7V8VnYUsgW3XcwaG564IrJApJ47V00QHmCzD18",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-api-sharmaji"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://gdf6pbs2y6.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_JBgjs5YxV",
        APP_CLIENT_ID: "6n0ndej3nuo4kqsmpol9jprmlu",
        IDENTITY_POOL_ID: "us-east-2:5aadc315-6a97-48fa-8003-67aeb245ac0b"
    }
};