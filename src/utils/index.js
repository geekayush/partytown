export function pushToGTM(eventObj) {
  const { label, action, category, eventName } = eventObj;
  const data = {
    eventAction: action,
    eventLabel: label,
    eventCategory: category,
    event: eventName,
  };
  if (window.dataLayer) {
    window.dataLayer.push(data);
  }
}
