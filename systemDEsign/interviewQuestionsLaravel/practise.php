
Retrieve categories with the highest number of products.

$categories = Category::withCount("products")
                        ->orderBy("created_at","desc");