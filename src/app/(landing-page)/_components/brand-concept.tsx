import Image from "next/image";

export function BrandConcept() {
  return (
    <section className="relative py-40 px-4">
      <Image
        src="https://d1ogj02ptc5x6g.cloudfront.net/demo38/uploads/themes/ec_force_basic_theme_20240815170418/ec_force/assets/images/concept.jpg"
        alt="Brand concept background"
        width={1200}
        height={600}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 max-w-xl mx-auto bg-white bg-opacity-90 p-8 shadow-md">
        <div className="text-3xl font-medium mb-4 text-center">
          BRAND CONCEPT
        </div>
        <p className="text-center text-balance text-gray-600">
          {`グッドスキンでは、自然の成分と科学的な革新の力を信じて、あなたの肌の真の可能性を引き出します。
            私たちの製品は、肌の自然な美しさを養い、保護し、強化するために設計されています。`}
        </p>
      </div>
    </section>
  );
}
