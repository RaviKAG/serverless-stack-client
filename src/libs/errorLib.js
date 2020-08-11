import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";
//const isLocal = false;

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({ dsn: "https://4e6b2bede08a4ec29c3722822a40a3bc@o432819.ingest.sentry.io/5386863" });
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
}