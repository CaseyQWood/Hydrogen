import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'hydrogen-preview.myshopify.com',
    storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
    storefrontApiVersion: '2022-07',
  }

});


// export default defineConfig({
//   shopify: {
//     storeDomain: 'hydrogen-preview.myshopify.com',
//     storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
//     storefrontApiVersion: '2022-07',
//   },
//   logger: {
//     /* Overrides the default `log.trace` behavior. */
//     trace: (request, ...args) => console.log(request.url, ...args),
//     /* Overrides the default `log.error` behavior. */
//     error: async (request, error) => {
//       console.error(error);
//       // Methods can return promises. Hydrogen won't block the current
//       // request but it will wait for the promises to be returned before the runtime instance ends.
//       await myErrorTrackingService.send(request, error);
//     },
//   showCacheApiStatus: true,
//   showQueryTiming: true
//   }
// });
