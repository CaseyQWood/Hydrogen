import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";

export default function Pruducts() {
  const {handle} = useRouteParams();

  console.log("This is Handle: ", handle);

  // could be some syntax issues here
  const {data: {product}} = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle
    }
  })

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
    },
  });

  // Implement an `Seo` component for the product. By specifying "type=product"
  // you're overriding the `defaultSeo` type in the Layout component.
  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <section className="p-6 md:p-8 lg:p-12">
        This will be the product page for <strong>{product.title}</strong>
      </section>
    </Layout>
  );
}

// Add a Graphql query that retrieves a product by its handle.
const PRODUCT_QUERY = gql`
  query Product($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    product(handle: $handle) {
      id
      title
      seo {
        title
        description
      }
    }
  }
`;