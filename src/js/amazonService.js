export default class AmazonService {
  static makeAPICall(searchCategory, apiKey) {
    return fetch(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=bestsellers&category_id=bestsellers_${searchCategory}&amazon_domain=amazon.com`).then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).catch(function(errorStatus) {
      return Error(errorStatus);
    });
  }
}