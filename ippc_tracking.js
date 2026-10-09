const PAGE_VIEW = "$pageview";
const PAGE_LEAVE = "$pageleave";
const CURRENT_URL = "$current_url";
const TRACKING_ENABLED = typeof POSTHOG_API_KEY === "string" && POSTHOG_API_KEY.trim().length > 0;

const pageView = (pageName) => {
    if (!TRACKING_ENABLED) return;
    if (!pageName) {
        console.debug('pageName is not valid', pageName);
        return;
    }
    if (window.posthog && typeof window.posthog.capture === "function") {
        window.posthog.capture(PAGE_VIEW, {
            "$current_url": createUrl(pageName),
            path: createPath(pageName),
            "$pathname": createPath(pageName)
        });
    }
};

const pageLeave = (pageName) => {
    if (!TRACKING_ENABLED) return;

    if (!pageName) {
        console.debug('pageName is not valid', pageName);
        return;
    }
    if (window.posthog && typeof window.posthog.capture === 'function') {
        window.posthog?.capture(PAGE_LEAVE, {
            "$current_url": createUrl(pageName),
            path: createPath(pageName),
            "$pathname": createPath(pageName)
        });
    }
};

/**
 *
 * @param eventName
 * @param properties optional properties,
 */
const customEvent = (eventName, properties) => {
    if (!TRACKING_ENABLED) return;
    if (!eventName) {
        console.debug("eventName is not valid", eventName);
        return;
    }
    if (window.posthog && typeof window.posthog.capture === 'function') {
        window.posthog?.capture(eventName, properties);
    }
}

const createUrl = (pageName) => {
    const host = `${window.location.protocol}//${window.location.host}`;
    return `${host}${createPath(pageName)}`;
}

const createPath = (pageName) => {
    let path = window.location.pathname.replace("index.jsp", "");
    if (path.charAt(path.length - 1) === "/") {
        path = path.substring(0, path.length - 1);
    }
    return `${path}/${pageName}`;
}

const trackFormData = (eventName, ad, wrapperId) => {
    try {
        const formWrapper = document.getElementById(wrapperId);
        const form = formWrapper.querySelector("form");
        const properties = {};
        getFormData(form).forEach((value, key) => { properties[key] = value; });
        customEvent(eventName, {ad: ad, ...properties});
    }
    catch (error) {
        console.error(`Something went wrong when tracking event: ${eventName}.  ${error}`);
    }
}

/**
 * gets all values from a form without them needing to be submitted.
 * @param form
 * @returns {Map<any, any>} A map of the form data, using the input names as keys.
 */
const getFormData = (form) => {
    return Array.from(form.elements).reduce(getFormDataReducer, new Map());
}

const getFormDataReducer = (accumulator, element) => {
    const keySource = element.id || element.name;
    if (!keySource) return accumulator;

    const key = encodeURIComponent(keySource);

    switch (element.nodeName) {
        case "INPUT":
            if (element.type === "checkbox" || element.type === "radio") {
                if (element.checked) accumulator.set(key, element.value || true);
            } else {
                accumulator.set(key, element.value);
            }
            break;
        case "SELECT":
        case "TEXTAREA":
            accumulator.set(key, element.value);
            break;
    }
    return accumulator;
}