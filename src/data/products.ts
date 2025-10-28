// src/data/products.ts
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

export const products: Product[] = [
  { id: 1, name: "無線滑鼠", category: "電子產品", price: 490, img: "https://tse1.mm.bing.net/th/id/OIP.o9AVtLtjSgx4vPZznTbRvgHaHa?pid=Api&P=0&h=180", desc: "靈敏操作，支援藍牙與 USB 接收器。" },
  { id: 2, name: "機械鍵盤", category: "電子產品", price: 1590, img: "https://tse4.mm.bing.net/th/id/OIP.symoeQjYVYlFzM50VKq38wHaEK?pid=Api&P=0&h=180", desc: "青軸設計，手感清脆、打字爽快。" },
  { id: 3, name: "筆記型電腦支架", category: "電子產品", price: 890, img: "https://tse1.mm.bing.net/th/id/OIP.FykWl0pXum1BS4Ooa1F9_QHaHa?pid=Api&P=0&h=180", desc: "鋁合金可調整角度，減少肩頸負擔。" },
  { id: 4, name: "真無線耳機", category: "電子產品", price: 1290, img: "https://tse3.mm.bing.net/th/id/OIP.YM4V72vCMybUGSCdNoq5HQHaHa?pid=Api&P=0&h=180", desc: "支援降噪與觸控操作，聽音樂超方便。" },
  { id: 5, name: "藍牙喇叭", category: "電子產品", price: 990, img: "https://tse1.mm.bing.net/th/id/OIP.dvwJN3M_QWc1QvOUEtHsrwHaHa?pid=Api&P=0&h=180", desc: "環繞立體音效，戶外聚會最佳夥伴。" },
  { id: 6, name: "智慧手錶", category: "電子產品", price: 2890, img: "https://tse2.mm.bing.net/th/id/OIP.K5Z1PuUfQeTHHOVWSaNQqgHaE7?pid=Api&P=0&h=180", desc: "心率監測、睡眠偵測，健康生活必備。" },
  { id: 7, name: "行動電源", category: "電子產品", price: 690, img: "https://tse4.mm.bing.net/th/id/OIP.3fKkZ4znPuf64crRAvpWYQHaHa?pid=Api&P=0&h=180", desc: "10000mAh 大容量，輕巧易帶。" },
  { id: 8, name: "平板電腦", category: "電子產品", price: 12500, img: "https://tse4.mm.bing.net/th/id/OIP.Oh5dCoa8ZZctyGItCNSKbAHaHa?pid=Api&P=0&h=180", desc: "輕薄高效，學習與娛樂兼顧。" },
  { id: 9, name: "外接硬碟", category: "電子產品", price: 2290, img: "https://tse2.mm.bing.net/th/id/OIP.nnAK0d2iQ-B5YLBlPdZl4wHaFj?pid=Api&P=0&h=180", desc: "1TB 大容量，快速傳輸資料。" },
  { id: 10, name: "USB-C 集線器", category: "電子產品", price: 1290, img: "https://tse2.mm.bing.net/th/id/OIP.nMxYUlThNGO799gq1NeJUAHaHd?pid=Api&P=0&h=180", desc: "4合1 功能，輕鬆連接螢幕、滑鼠、隨身碟。" },

  // 居家生活 (11–20)
  { id: 11, name: "香氛蠟燭", category: "居家生活", price: 450, img: "https://tse3.mm.bing.net/th/id/OIP.d2nDyOMzsIlmic0mhjM7qAHaEm?pid=Api&P=0&h=180", desc: "放鬆心情，提升居家氛圍。" },
  { id: 12, name: "室內拖鞋", category: "居家生活", price: 290, img: "https://tse3.mm.bing.net/th/id/OIP.9MQNEaAr6hb_2QGSBuv6BQHaHa?pid=Api&P=0&h=180", desc: "柔軟舒適，防滑耐磨。" },
  { id: 13, name: "北歐風抱枕", category: "居家生活", price: 390, img: "https://tse2.mm.bing.net/th/id/OIP.kMdd6Al_2vN3zRnr_UNe6QHaHa?pid=Api&P=0&h=180", desc: "簡約設計，居家質感加分。" },
  { id: 14, name: "床頭小夜燈", category: "居家生活", price: 520, img: "https://tse3.mm.bing.net/th/id/OIP.5otP1_gjDx6C4Ix0jYPS8AHaHa?pid=Api&P=0&h=180", desc: "暖光護眼，柔和不刺眼。" },
  { id: 15, name: "香氛擴香瓶", category: "居家生活", price: 380, img: "https://tse3.mm.bing.net/th/id/OIP.V-SPBaGSNU7oRqgF3GLOXQHaHa?pid=Api&P=0&h=180", desc: "薰衣草香氣，助眠放鬆。" },
  { id: 16, name: "電風扇", category: "居家生活", price: 1290, img: "https://tse2.mm.bing.net/th/id/OIP.ybKeXeP4b5P0iduLwczl1AHaHa?pid=Api&P=0&h=180", desc: "安靜節能，涼爽一整天。" },
  { id: 17, name: "濾水壺", category: "居家生活", price: 890, img: "https://tse2.mm.bing.net/th/id/OIP.ZSC2Nd68uOISB0g2VATgcQHaHa?pid=Api&P=0&h=180", desc: "有效過濾雜質，喝得更安心。" },
  { id: 18, name: "廚房刀具組", category: "居家生活", price: 990, img: "https://tse4.mm.bing.net/th/id/OIP.cv7uyzsPnI-ivfpsJKK7jwHaHa?pid=Api&P=0&h=180", desc: "鋒利耐用，輕鬆料理。" },
  { id: 19, name: "不鏽鋼保溫壺", category: "居家生活", price: 590, img: "https://tse1.mm.bing.net/th/id/OIP.PRaobisx_66SkUJrx9H1-AHaHa?pid=Api&P=0&h=180", desc: "保溫保冷皆宜，外出必備。" },
  { id: 20, name: "電熱水壺", category: "居家生活", price: 890, img: "https://tse1.mm.bing.net/th/id/OIP.gLXfOf7r4fcCwUUpFS7JMQHaHa?pid=Api&P=0&h=180", desc: "304 不鏽鋼，快速加熱。" },

  // 食品飲品 (21–30)
  { id: 21, name: "濾掛咖啡組", category: "食品飲品", price: 250, img: "https://tse3.mm.bing.net/th/id/OIP.HavhCgdjH6Y3NezZBmFXhQHaHa?pid=Api&P=0&h=180", desc: "香氣濃郁，現沖即享。" },
  { id: 22, name: "綠茶禮盒", category: "食品飲品", price: 620, img: "https://tse1.mm.bing.net/th/id/OIP.xR_YYaO4NqzEnhuzH1_UdgHaHa?pid=Api&P=0&h=180", desc: "純正台灣茶香，回甘清爽。" },
  { id: 23, name: "手工餅乾", category: "食品飲品", price: 199, img: "https://tse2.mm.bing.net/th/id/OIP.J1-ZOJuUwlUqHC_hw9vgfgHaFj?pid=Api&P=0&h=180", desc: "手作香酥，下午茶最佳選擇。" },
  { id: 24, name: "黑巧克力棒", category: "食品飲品", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP._esqYWEYCCbBUO3LUha0bwHaEM?pid=Api&P=0&h=180", desc: "70% 可可，微苦順口。" },
  { id: 25, name: "堅果罐", category: "食品飲品", price: 380, img: "https://tse4.mm.bing.net/th/id/OIP.ePWz_o_8QzdCLrmx2Dg5fQHaHa?pid=Api&P=0&h=180", desc: "無添加糖，營養健康。" },
  { id: 26, name: "蜂蜜禮盒", category: "食品飲品", price: 420, img: "https://tse4.mm.bing.net/th/id/OIP._k_pSUXE0cf9P0aLsCCJ2AHaE8?pid=Api&P=0&h=180", desc: "天然純蜜，甜而不膩。" },
  { id: 27, name: "冷泡茶瓶", category: "食品飲品", price: 390, img: "https://tse4.mm.bing.net/th/id/OIP.H19vSW0KJbgja8fIJU5PPAHaHa?pid=Api&P=0&h=180", desc: "自製冷泡茶，清涼一夏。" },
  { id: 28, name: "咖啡濾杯", category: "食品飲品", price: 290, img: "https://tse4.mm.bing.net/th/id/OIP.Q5_L_H2NqmRe9M7i1l6eAgHaHa?pid=Api&P=0&h=180", desc: "慢慢沖出香醇滋味。" },
  { id: 29, name: "水果乾組合", category: "食品飲品", price: 350, img: "https://tse3.mm.bing.net/th/id/OIP.oo6TwHamTDBYJKWYpr2XRQHaHa?pid=Api&P=0&h=180", desc: "天然無添加，健康小食。" },
  { id: 30, name: "燕麥棒", category: "食品飲品", price: 280, img: "https://tse2.mm.bing.net/th/id/OIP.PzYoDex4vCvFWMZd4rWGdQHaHa?pid=Api&P=0&h=180", desc: "能量補給，登山出遊方便帶。" },

  // 文具書籍 (31–40)
  { id: 31, name: "筆記本", category: "文具書籍", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP.qokDDpIsLibs8NmJCO9B7wHaHa?pid=Api&P=0&h=180", desc: "A5 尺寸，厚實紙張不滲墨。" },
  { id: 32, name: "原子筆組", category: "文具書籍", price: 150, img: "https://tse1.mm.bing.net/th/id/OIP.sQnY-xLA5w-r325m2Iq3_wHaHa?pid=Api&P=0&h=180", desc: "順滑好寫，適合日常筆記。" },
  { id: 33, name: "素描本", category: "文具書籍", price: 200, img: "https://tse1.mm.bing.net/th/id/OIP.rC2lxW29lIVkSM3H1tR_7AHaHa?pid=Api&P=0&h=180", desc: "藝術學生必備，厚紙質感。" },
  { id: 34, name: "書架收納盒", category: "文具書籍", price: 390, img: "https://tse3.mm.bing.net/th/id/OIP.njHQ_H-iOLpY4zGUQJoVwAHaHa?pid=Api&P=0&h=180", desc: "整齊擺放書籍與筆記本。" },
  { id: 35, name: "書燈", category: "文具書籍", price: 590, img: "https://tse3.mm.bing.net/th/id/OIP.yRq9V-kNIviqoiIpLeT4GQHaHa?pid=Api&P=0&h=180", desc: "閱讀專用護眼光源。" },
  { id: 36, name: "手帳本", category: "文具書籍", price: 290, img: "https://tse2.mm.bing.net/th/id/OIP.Tqz2T0vs8e-MP51HIww3AwHaHa?pid=Api&P=0&h=180", desc: "紀錄生活與靈感的最佳夥伴。" },
  { id: 37, name: "設計筆袋", category: "文具書籍", price: 260, img: "https://tse4.mm.bing.net/th/id/OIP.PaqHo2cw-KSOU40wZWdbzQHaHa?pid=Api&P=0&h=180", desc: "防水布面，容量大好收納。" },
  { id: 38, name: "鉛筆盒", category: "文具書籍", price: 190, img: "https://tse3.mm.bing.net/th/id/OIP.nxG_DyxC9S5WtQo06_Ay8wHaHa?pid=Api&P=0&h=180", desc: "簡約造型，學生必備文具。" },
  { id: 39, name: "便利貼組合", category: "文具書籍", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP.VgdGQprbAJX3BrZgzdiungHaHa?pid=Api&P=0&h=180", desc: "多色分類，輕鬆標記重點。" },
  { id: 40, name: "書籤套組", category: "文具書籍", price: 99, img: "https://tse3.mm.bing.net/th/id/OIP.RvKFKOE7lOouZeuOyB0j1wHaHa?pid=Api&P=0&h=180", desc: "金屬質感，閱讀更有品味。" },

  // 美妝保養 (41–50)
  { id: 41, name: "護手霜", category: "美妝保養", price: 350, img: "https://tse1.mm.bing.net/th/id/OIP.PGiw_1aoU6PG0LiUyYu3ngHaHa?pid=Api&P=0&h=180", desc: "保濕滋潤，香氣自然。" },
  { id: 42, name: "潤唇膏", category: "美妝保養", price: 180, img: "https://tse4.mm.bing.net/th/id/OIP.ADL16z3XXZDgi2czU2uyBAHaIu?pid=Api&P=0&h=180", desc: "柔嫩雙唇，遠離乾裂。" },
  { id: 43, name: "潔顏慕斯", category: "美妝保養", price: 490, img: "https://tse4.mm.bing.net/th/id/OIP.VudYYyFZb1LHwlHtBTAJYwHaHa?pid=Api&P=0&h=180", desc: "溫和清潔，維持肌膚水潤。" },
  { id: 44, name: "面膜組合", category: "美妝保養", price: 690, img: "https://tse1.mm.bing.net/th/id/OIP.7xU3BVA6NyEZ7F2At9BSuAHaHa?pid=Api&P=0&h=180", desc: "深層保濕，讓肌膚亮起來。" },
  { id: 45, name: "香水", category: "美妝保養", price: 1290, img: "https://tse2.mm.bing.net/th/id/OIP.h0WD6dnz-UO1yGsKm26S-AHaIp?pid=Api&P=0&h=180", desc: "清新木質調香氣，持久迷人。" },
  { id: 46, name: "化妝包", category: "美妝保養", price: 390, img: "https://tse2.mm.bing.net/th/id/OIP.2j0JCYzBcv8n-xehFXkjNgHaHa?pid=Api&P=0&h=180", desc: "時尚小巧，外出補妝方便。" },
  { id: 47, name: "卸妝油", category: "美妝保養", price: 490, img: "https://tse3.mm.bing.net/th/id/OIP._QUYxpW57z_GDemNPgksiwHaHa?pid=Api&P=0&h=180", desc: "溫和卸妝不刺激，乾淨清爽。" },
  { id: 48, name: "睫毛膏", category: "美妝保養", price: 350, img: "https://tse1.mm.bing.net/th/id/OIP.1FsTerVuFMxNgP36DWGz0AHaHa?pid=Api&P=0&h=180", desc: "防水不暈染，濃密捲翹。" },
  { id: 49, name: "腮紅盤", category: "美妝保養", price: 490, img: "https://tse3.mm.bing.net/th/id/OIP.fm_j6fL-lei9ld62DHhgNQHaHa?pid=Api&P=0&h=180", desc: "自然顯色，打造氣色好氣場。" },
  { id: 50, name: "乳液", category: "美妝保養", price: 590, img: "https://tse4.mm.bing.net/th/id/OIP.Z8PQqYx48jiKUwAKpwc3TAHaHa?pid=Api&P=0&h=180", desc: "全身保濕，吸收快速不黏膩。" },

// 寵物用品 (51–60)
{ id: 51, name: "貓咪飼料", category: "寵物用品", price: 890, img: "https://tse3.mm.bing.net/th/id/OIP.0HDTzVsZPasePVpKv3UFJgHaHa?pid=Api&P=0&h=180", desc: "高蛋白低脂配方，毛孩最愛。" },
{ id: 52, name: "狗狗項圈", category: "寵物用品", price: 390, img: "https://tse1.mm.bing.net/th/id/OIP.7mdwcv5no8A79QH8At95TgHaHa?pid=Api&P=0&h=180", desc: "可調整長度，柔軟皮革舒適。" },
{ id: 53, name: "貓抓板", category: "寵物用品", price: 450, img: "https://tse4.mm.bing.net/th/id/OIP.x6tLiVG8SZBDs3-Su8dsGAHaHa?pid=Api&P=0&h=180", desc: "堅固耐用，貓咪盡情磨爪。" },
{ id: 54, name: "狗狗玩具球", category: "寵物用品", price: 250, img: "https://tse1.mm.bing.net/th/id/OIP.CW7tZHC-HvvLRR5MBLTJ8wHaH9?pid=Api&P=0&h=180", desc: "訓練互動，陪伴毛孩運動。" },
{ id: 55, name: "寵物飲水機", category: "寵物用品", price: 990, img: "https://tse4.mm.bing.net/th/id/OIP.lVeCtQWu5iWmvBxvtmzfvwHaHa?pid=Api&P=0&h=180", desc: "循環水流，保持新鮮潔淨。" },
{ id: 56, name: "貓砂鏟", category: "寵物用品", price: 120, img: "https://tse4.mm.bing.net/th/id/OIP.lt-Gs4yqZrinLQXZcRwRQgHaHa?pid=Api&P=0&h=180", desc: "實用設計，方便清理。" },
{ id: 57, name: "狗狗睡墊", category: "寵物用品", price: 690, img: "https://tse1.mm.bing.net/th/id/OIP.4Mdymg6I3f3aNmmuvcQwigHaHa?pid=Api&P=0&h=180", desc: "柔軟防滑，舒適安眠。" },
{ id: 58, name: "寵物提籠", category: "寵物用品", price: 1590, img: "https://tse1.mm.bing.net/th/id/OIP.UQpQV90uaN4-B1FBYnO65gHaHa?pid=Api&P=0&h=180", desc: "透氣耐用，外出安全方便。" },
{ id: 59, name: "貓玩具逗棒", category: "寵物用品", price: 180, img: "https://tse4.mm.bing.net/th/id/OIP.buTjTAGIXgUuPWcTJEtRXgHaHa?pid=Api&P=0&h=180", desc: "高彈力逗貓棒，激發玩心。" },
{ id: 60, name: "寵物零食罐", category: "寵物用品", price: 280, img: "https://tse1.mm.bing.net/th/id/OIP.oEDgIKVBOwMwsq8gN_w_LAHaHa?pid=Api&P=0&h=180", desc: "酥脆美味，健康點心。" },

// 玩具運動 (61–70)
{ id: 61, name: "樂高積木組", category: "玩具運動", price: 2590, img: "https://tse2.mm.bing.net/th/id/OIP.Gt8cRfh1XHwRHyEIJQQarQHaHa?pid=Api&P=0&h=180", desc: "啟發創意，無限想像力。" },
{ id: 62, name: "桌遊卡牌", category: "玩具運動", price: 890, img: "https://tse2.mm.bing.net/th/id/OIP.qHmTuVkKHuCCFLfvZ5IeCwHaHa?pid=Api&P=0&h=180", desc: "派對聚會氣氛神器。" },
{ id: 63, name: "籃球", category: "玩具運動", price: 790, img: "https://sp.yimg.com/ib/th?id=OPAC.VKRYrbDFLWAriA474C474&o=5&pid=21.1&w=160&h=105", desc: "室內外通用，防滑耐磨。" },
{ id: 64, name: "足球", category: "玩具運動", price: 850, img: "https://sp.yimg.com/ib/th?id=OPAC.gPZFvQnSOIthaQ474C474&o=5&pid=21.1&w=160&h=105", desc: "經典五號球，訓練與比賽皆可用。" },
{ id: 65, name: "網球拍", category: "玩具運動", price: 1390, img: "https://sp.yimg.com/ib/th?id=OPAC.fNM0f%2byBj0vg6A474C474&o=5&pid=21.1&w=160&h=105", desc: "輕量碳纖設計，揮拍順暢。" },
{ id: 66, name: "滑板", category: "玩具運動", price: 2590, img: "https://sp.yimg.com/ib/th?id=OPAC.bV8yiOtBUE7BJw474C474&o=5&pid=21.1&w=160&h=105c", desc: "雙翹板型，街頭玩家首選。" },
{ id: 67, name: "登山杖", category: "玩具運動", price: 890, img: "https://sp.yimg.com/ib/th?id=OPAC.17krVbzytCIgOA474C474&o=5&pid=21.1&w=160&h=105", desc: "可伸縮鋁合金設計，穩定支撐。" },
{ id: 68, name: "瑜伽墊", category: "玩具運動", price: 690, img: "https://tse2.mm.bing.net/th/id/OIP.Sl8TAe593U7uo_dNqArURgHaHa?pid=Api&P=0&h=180", desc: "防滑材質，練習更穩定。" },
{ id: 69, name: "壺鈴", category: "玩具運動", price: 890, img: "https://tse3.mm.bing.net/th/id/OIP.vHQUAzNWj40zh31B3UeJTAHaHa?pid=Api&P=0&h=180", desc: "鋼製防滑手把，居家運動首選。" },
{ id: 70, name: "跳繩", category: "玩具運動", price: 220, img: "https://sp.yimg.com/ib/th?id=OPAC.tQTGLFR5jg6thw474C474&o=5&pid=21.1&w=160&h=105", desc: "可調節長度，燃脂訓練必備。" },

// 旅遊戶外 (71–80)
{ id: 71, name: "旅行箱", category: "旅遊戶外", price: 2890, img: "https://tse1.mm.bing.net/th/id/OIP.RscMK_gq7TvjH12SVJ6u8gHaHS?pid=Api&P=0&h=180", desc: "輕量耐摔設計，滑順靜音輪。" },
{ id: 72, name: "露營帳篷", category: "旅遊戶外", price: 3890, img: "https://tse4.mm.bing.net/th/id/OIP.4SIGg0dncIiiCvHNFWI-pQHaHa?pid=Api&P=0&h=180", desc: "雙人防水帳，搭建簡單。" },
{ id: 73, name: "睡袋", category: "旅遊戶外", price: 990, img: "https://tse3.mm.bing.net/th/id/OIP.2ARB63U4pvJ72wnjQg7jeQHaHa?pid=Api&P=0&h=180", desc: "輕便保暖，適合登山露營使用。" },
{ id: 74, name: "登山背包", category: "旅遊戶外", price: 1990, img: "https://tse3.mm.bing.net/th/id/OIP.Yx9rJRru_gat4AO_iHwj4QHaHa?pid=Api&P=0&h=180", desc: "大容量設計，多夾層收納。" },
{ id: 75, name: "保冷袋", category: "旅遊戶外", price: 490, img: "https://tse3.mm.bing.net/th/id/OIP.I2mNMBO1kMyvRLRltkJBZwHaHa?pid=Api&P=0&h=180", desc: "野餐郊遊保冰好幫手。" },
{ id: 76, name: "頭燈", category: "旅遊戶外", price: 390, img: "https://sp.yimg.com/ib/th?id=OPAC.2cJIf%2bV2cAcG2w474C474&o=5&pid=21.1&w=160&h=105", desc: "夜間登山或緊急照明實用。" },
{ id: 77, name: "摺疊椅", category: "旅遊戶外", price: 590, img: "https://sp.yimg.com/ib/th?id=OPAC.%2b7%2flZSr7A%2fZgpg474C474&o=5&pid=21.1&w=160&h=105", desc: "輕巧便攜，戶外露營好夥伴。" },
{ id: 78, name: "野餐墊", category: "旅遊戶外", price: 350, img: "https://tse1.mm.bing.net/th/id/OIP.PRA9kjoM2rvnB-e61IGP7wHaHa?pid=Api&P=0&h=180", desc: "防潑水材質，輕鬆清潔。" },
{ id: 79, name: "水壺掛勾", category: "旅遊戶外", price: 120, img: "https://tse2.mm.bing.net/th/id/OIP.gSkivdfijlF-a-sjXE0JpAHaHa?pid=Api&P=0&h=180", desc: "不鏽鋼材質，牢固耐用。" },
{ id: 80, name: "折疊桌", category: "旅遊戶外", price: 890, img: "https://sp.yimg.com/ib/th?id=OPAC.YsjzD8sCWG%2bisQ474C474&o=5&pid=21.1&w=160&h=105", desc: "露營野餐快速展開好收納。" },

// 趣味小物 (81–100)
{ id: 81, name: "相框", category: "趣味小物", price: 290, img: "https://tse3.mm.bing.net/th/id/OIP.5V_Lp80-JoVfYqGBYka_HwHaHa?pid=Api&P=0&h=180", desc: "珍藏回憶，簡約木質相框。" },
{ id: 82, name: "桌上時鐘", category: "趣味小物", price: 450, img: "https://tse1.mm.bing.net/th/id/OIP.SKQZV1HmWoxnBHN9vcUDcwHaHa?pid=Api&P=0&h=180", desc: "靜音掃秒，設計簡約。" },
{ id: 83, name: "盆栽植物", category: "趣味小物", price: 350, img: "https://tse4.mm.bing.net/th/id/OIP.HyBANJITIc9bwpN-3rERhgHaHa?pid=Api&P=0&h=180", desc: "淨化空氣，綠意滿屋。" },
{ id: 84, name: "磁吸收納盒", category: "趣味小物", price: 260, img: "https://tse3.mm.bing.net/th/id/OIP.ZKxGcD_GxI3-Q98A-vU97wHaHa?pid=Api&P=0&h=180", desc: "辦公桌整潔好幫手。" },
{ id: 85, name: "行李吊牌", category: "趣味小物", price: 150, img: "https://tse2.mm.bing.net/th/id/OIP.a4olq8oATlQVXGTkzZJ_5AHaFg?pid=Api&P=0&h=180", desc: "旅行辨識，防丟可愛造型。" },
{ id: 86, name: "玻璃水杯", category: "趣味小物", price: 180, img: "https://tse1.mm.bing.net/th/id/OIP.GDHb2Y2pFJrbcT2kRgufmQHaHa?pid=Api&P=0&h=180", desc: "透明耐熱玻璃，飲品最佳拍檔。" },
{ id: 87, name: "USB 小夜燈", category: "趣味小物", price: 150, img: "https://sp.yimg.com/ib/th?id=OPAC.ArX3z4pfsqliTw474C474&o=5&pid=21.1&w=160&h=105", desc: "插上筆電即可使用，隨時點亮你的工作空間。" },
{ id: 88, name: "迷你風扇", category: "趣味小物", price: 290, img: "https://tse3.mm.bing.net/th/id/OIP.xtpR69IiI9Fin_0tMzxzmAHaHa?pid=Api&P=0&h=180", desc: "夏日降溫小神器，隨身涼爽不間斷。" },
{ id: 89, name: "防水手機套", category: "趣味小物", price: 350, img: "https://tse3.mm.bing.net/th/id/OIP.vV9veqdyNHim2eM6wpd8pgHaHa?pid=Api&P=0&h=180", desc: "海邊、泳池必備保護套，防水安全。" },
{ id: 90, name: "折疊雨傘", category: "趣味小物", price: 490, img: "https://tse1.mm.bing.net/th/id/OIP.e4W2DQzuWUs5TXEh6BEfIwHaHa?pid=Api&P=0&h=180", desc: "輕巧防風設計，方便隨身攜帶。" },
{ id: 91, name: "磁吸手機支架", category: "趣味小物", price: 290, img: "https://tse3.mm.bing.net/th/id/OIP.h3iKyj1dHJcjiuBSIHBAlAHaHa?pid=Api&P=0&h=180", desc: "支援車用與桌面使用，穩固不晃動。" },
{ id: 92, name: "可愛造型抱枕", category: "趣味小物", price: 450, img: "https://tse3.mm.bing.net/th/id/OIP.MLdzDVezBRsCJL1tvKMgaAHaHa?pid=Api&P=0&h=180", desc: "柔軟蓬鬆，療癒你的午後時光。" },
{ id: 93, name: "手工相片夾", category: "趣味小物", price: 190, img: "https://tse1.mm.bing.net/th/id/OIP.Km23hQ_D6KIuVt_hIhohDwHaHa?pid=Api&P=0&h=180", desc: "復古木質，簡約擺設小品。" },
{ id: 94, name: "迷你夜光鐘", category: "趣味小物", price: 320, img: "https://tse3.mm.bing.net/th/id/OIP.-hb--4GurmAzY6EKBVP3bwHaHa?pid=Api&P=0&h=180", desc: "夜間可見，靜音無聲干擾。" },
{ id: 95, name: "桌面收納籃", category: "趣味小物", price: 250, img: "https://tse2.mm.bing.net/th/id/OIP.aIFb8bMcNv400uR3N3gL0wHaHa?pid=Api&P=0&h=180", desc: "整理小物，打造整潔空間。" },
{ id: 96, name: "創意馬克杯", category: "趣味小物", price: 280, img: "https://tse3.mm.bing.net/th/id/OIP.JzofdZ_Yt_jETZWOqlPwPgHaHa?pid=Api&P=0&h=180", desc: "陶瓷質感，喝水也有好心情。" },
{ id: 97, name: "USB 風扇燈", category: "趣味小物", price: 390, img: "https://tse2.mm.bing.net/th/id/OIP.p1HauEcahPZFhMzbbS-B5AHaHa?pid=Api&P=0&h=180", desc: "多功能設計，清涼又照明。" },
{ id: 98, name: "造型筆筒", category: "趣味小物", price: 180, img: "https://tse4.mm.bing.net/th/id/OIP.qpThOPi3TMrX0_kE2rWP7QHaHa?pid=Api&P=0&h=180", desc: "文創風格，桌面收納兼具美感。" },
{ id: 99, name: "桌面小鏡子", category: "趣味小物", price: 220, img: "https://tse2.mm.bing.net/th/id/OIP.s_Jtz_GXv_6I1xwjhli5hQHaHa?pid=Api&P=0&h=180", desc: "隨時整理儀容，精緻生活。" },
{ id: 100, name: "多功能折疊刀", category: "趣味小物", price: 590, img: "https://tse4.mm.bing.net/th/id/OIP.Z-rXZnXkmYgpoZR6JLnoQAHaHa?pid=Api&P=0&h=180", desc: "露營與日常實用兼具的口袋工具。" }
];

