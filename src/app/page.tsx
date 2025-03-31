import { Card } from "@/components/ui/card"
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertCircle
} from "lucide-react"

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">ダッシュボード</h1>
        <div className="text-sm text-muted-foreground">
          最終更新: {new Date().toLocaleString('ja-JP')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center space-x-4 bg-card border">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">アクティブ顧客</p>
            <h2 className="text-2xl font-bold text-foreground">1,234</h2>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 bg-card border">
          <div className="p-3 bg-green-100 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">今月の取引額</p>
            <h2 className="text-2xl font-bold text-foreground">¥123.4M</h2>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 bg-card border">
          <div className="p-3 bg-purple-100 rounded-full">
            <BarChart3 className="h-6 w-6 text-purple-700" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">商品提案数</p>
            <h2 className="text-2xl font-bold text-foreground">89</h2>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 bg-card border">
          <div className="p-3 bg-orange-100 rounded-full">
            <AlertCircle className="h-6 w-6 text-orange-700" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">要フォロー</p>
            <h2 className="text-2xl font-bold text-foreground">12</h2>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">最近の活動</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">山田太郎様との面談を完了</p>
                  <p className="text-xs text-muted-foreground">2時間前</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">今日の予定</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">佐藤花子様 商品提案MTG</p>
                  <p className="text-xs text-muted-foreground">14:00 - 15:00</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
