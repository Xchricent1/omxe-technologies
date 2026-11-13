import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProductCard } from "@/components/site/Blocks";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — SmartBiz Business Management Software | OMXE Technologies" }, { name: "description", content: "SmartBiz is an upcoming business management system by OMXE Technologies for small and medium-sized businesses: inventory, sales, expenses, debts and analytics." }, { property: "og:title", content: "Products — SmartBiz Business Management Software | OMXE Technologies" }, { property: "og:description", content: "SmartBiz is an upcoming business management system by OMXE Technologies for small and medium-sized businesses: inventory, sales, expenses, debts and analytics." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/products" }], links: [{ rel: "canonical", href: "/products" }] }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>Software products <span className="text-gradient">built by OMXE.</span></>}>
        Alongside client work, we develop our own products to address common challenges faced by businesses.
      </PageHero>
      <section className="container-x space-y-8 py-20">
        {PRODUCTS.map((p) => <ProductCard key={p.name} p={p} />)}
        <p className="text-center text-sm text-muted-foreground">More products are planned. Check back as OMXE grows.</p>
      </section>
      <CtaBand />
    </>
  );
}
