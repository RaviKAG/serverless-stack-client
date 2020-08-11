const dev = {
    STRIPE_KEY: "pk_test_51HEeFGIK4UHRiSs0goXBNin8MBDsYrMNOPkyFuezuyWoOXEHkJsSOrkBEr3m7V8VnYUsgW3XcwaG564IrJApJ47V00QHmCzD18",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-x7wvilgwc58l"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://ql02v4ob80.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_tsnDGzGTd",
        APP_CLIENT_ID: "1g3f6ac1ctb3n71g2lvlqq5oek",
        IDENTITY_POOL_ID: "us-east-2:655325eb-a193-4113-9047-d6b500ecd8ed"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51HEeFGIK4UHRiSs0goXBNin8MBDsYrMNOPkyFuezuyWoOXEHkJsSOrkBEr3m7V8VnYUsgW3XcwaG564IrJApJ47V00QHmCzD18",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-f80vth9ygc2k"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://2lor9ie472.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_3b8d6Wulw",
        APP_CLIENT_ID: "7102m925rvupaknk5gq9afjiot",
        IDENTITY_POOL_ID: "us-east-2:2af3892d-fcf3-4677-853b-36c0022962b3"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};



// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_51HEeFGIK4UHRiSs0goXBNin8MBDsYrMNOPkyFuezuyWoOXEHkJsSOrkBEr3m7V8VnYUsgW3XcwaG564IrJApJ47V00QHmCzD18",
//     s3: {
//         REGION: "us-east-2",
//         BUCKET: "notes-app-api-sharmaji"
//     },
//     apiGateway: {
//         REGION: "us-east-2",
//         URL: "https://gdf6pbs2y6.execute-api.us-east-2.amazonaws.com/prod"
//     },
//     cognito: {
//         REGION: "us-east-2",
//         USER_POOL_ID: "us-east-2_JBgjs5YxV",
//         APP_CLIENT_ID: "6n0ndej3nuo4kqsmpol9jprmlu",
//         IDENTITY_POOL_ID: "us-east-2:5aadc315-6a97-48fa-8003-67aeb245ac0b"
//     }
// };