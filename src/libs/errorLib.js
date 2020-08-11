export function onError(error) {
    let message = error.toString();

    console.log(` Error === ${error}`);

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        message = error.message;
    }

    alert(message);
}