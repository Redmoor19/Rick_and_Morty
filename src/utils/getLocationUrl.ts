export function getLocationUrl(name: string, url: string) {
    if (name === "unknown") return "";
    const locUrl = new URL(url);
    const locationId = locUrl.pathname.split("/").at(-1);
    return `/locations/${locationId}`;
}