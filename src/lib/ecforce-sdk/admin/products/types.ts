export type Product = {
  id: string;
  type: string;
  attributes: {
    id: number;
    number: string;
    state: string;
    human_state: string;
    name: string;
    upsell_product_id: number | null;
    upsell_product_number: string | null;
    upsell_product_name: string | null;
    cv_upsell_product_id: number | null;
    cv_upsell_product_number: string | null;
    cv_upsell_product_name: string | null;
    maker_id: number | null;
    maker_name: string | null;
    description: string;
    description_mobile: string;
    sub_description: string;
    sub_description_mobile: string;
    meta_description: string;
    meta_keywords: string;
    is_recurring: boolean;
    product_category_names: string;
    master_list_price: number;
    master_sales_price: number;
    master_sku: string;
    tax_id: number;
    link_number: string;
    option01: string;
    option02: string;
    option03: string;
    option04: string;
    option05: string;
    option06: string;
    option07: string;
    option08: string;
    option09: string;
    option10: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  relationships: {
    bundled_items: {
      data: {
        id: string;
        type: string;
      }[];
    };
    variants: {
      data: {
        id: string;
        type: string;
      }[];
    };
    product_categories: {
      data: {
        id: string;
        type: string;
      }[];
    };
    thumbnail: {
      data: {
        id: string;
        type: string;
      } | null;
    };
  };
};

export type Thumbnail = {
  id: string;
  type: string;
  attributes: {
    id: number;
    file_name: string;
    content_type: string;
    file_size: number;
    position: number;
    url: string;
    url_small: string;
    url_medium: string;
    url_large: string;
    path: string;
    path_small: string;
    path_medium: string;
    path_large: string;
    created_at: string;
    updated_at: string;
  };
};
