export default function resolveProductionUrl(document) {
  // return `https://localhost:3000/preview?id=${document._id}&type=${document._type}`; //use this for development
  return `https://sanity-creunano-fe.dare-lords.now.sh/preview?id=${
    document._id
  }&type=${document._type}`;
}
