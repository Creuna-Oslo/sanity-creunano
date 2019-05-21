export default function resolveProductionUrl(document) {
  return `localhost:3000/preview?id=${document._id}&type=${document._type}`;
}
