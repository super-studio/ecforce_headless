import { Button } from "@/components/ui/button";

export function News() {
  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <div className="text-3xl">NEWS</div>
        <div className="text-xl">お知らせ</div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 mt-8">
        {[
          {
            date: "2023-08-15",
            title: "新製品発売のお知らせ - New Product Launch",
          },
          {
            date: "2023-08-10",
            title: "サマーセール開催中 - Summer Sale Now On",
          },
          {
            date: "2023-08-05",
            title: "ポップアップストア in 東京 - Pop-up Store in Tokyo",
          },
          {
            date: "2023-07-30",
            title:
              "新しいブランドアンバサダー発表 - New Brand Ambassador Announcement",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-b pb-4"
          >
            <time className="text-sm text-gray-500 whitespace-nowrap">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Button size="lg">もっと見る</Button>
      </div>
    </section>
  );
}
