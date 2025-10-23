# Layout Wrapper Documentation

## 📋 Mô tả

`LayoutWrapper` là component bao bọc toàn bộ nội dung trang, tự động thêm Header và Footer vào mọi trang.

## 📁 Vị trí

`src/routes/layout_wrapper.tsx`

## 🎯 Tính năng

### 1. **Tự động thêm Header và Footer**

- Header hiển thị ở đầu trang
- Footer hiển thị ở cuối trang
- Main content nằm giữa và tự động grow để chiếm hết không gian

### 2. **Logic thông minh cho trang Wedding**

- Trang `/wedding` và `/` (root): KHÔNG hiển thị header từ layout (vì có header tĩnh riêng)
- Các trang khác: Tự động hiển thị header

### 3. **Tùy chỉnh linh hoạt**

Component nhận các props:

```typescript
interface LayoutWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean; // Mặc định: true
  showFooter?: boolean; // Mặc định: true
  headerAlwaysShow?: boolean; // Mặc định: false
}
```

## 💻 Cách sử dụng

### 1. Sử dụng trong Root Layout (Khuyến nghị)

Đã được áp dụng trong `src/app/layout.tsx`:

```tsx
import LayoutWrapper from "@/routes/layout_wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <SmoothScroll />
        <FallingHearts />
        <MusicPlayer />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
```

### 2. Sử dụng trong từng page (Nếu cần tùy chỉnh)

```tsx
import LayoutWrapper from "@/routes/layout_wrapper";

export default function CustomPage() {
  return (
    <LayoutWrapper
      showHeader={true} // Hiển thị header
      showFooter={true} // Hiển thị footer
      headerAlwaysShow={true} // Header luôn hiển thị (không ẩn khi scroll)
    >
      <div>Nội dung trang của bạn</div>
    </LayoutWrapper>
  );
}
```

### 3. Tắt Header hoặc Footer

```tsx
// Trang không có header
<LayoutWrapper showHeader={false}>
  {children}
</LayoutWrapper>

// Trang không có footer
<LayoutWrapper showFooter={false}>
  {children}
</LayoutWrapper>

// Trang không có cả header và footer
<LayoutWrapper showHeader={false} showFooter={false}>
  {children}
</LayoutWrapper>
```

## 🔧 Cấu trúc HTML

```html
<div class="flex flex-col min-h-screen">
  <!-- Header (nếu showHeader=true và không phải trang wedding) -->
  <header alwaysShow="{headerAlwaysShow}" />

  <!-- Main Content -->
  <main class="grow">{children}</main>

  <!-- Footer (nếu showFooter=true) -->
  <footer />
</div>
```

## 📝 Logic đặc biệt

### Trang Wedding và Root

```typescript
const isWeddingPage = pathname === "/wedding" || pathname === "/";
```

- Trang này có header tĩnh riêng trong component
- Layout wrapper sẽ KHÔNG thêm header nữa
- Tránh bị duplicate header

### Các trang khác

- Couple, Love Story, Schedule, Album, Invitation
- Tự động có header từ layout wrapper
- Header có thể scroll ẩn/hiện tùy theo setting

## 🎨 Responsive

Layout wrapper tự động responsive:

- `min-h-screen`: Chiều cao tối thiểu bằng viewport
- `flex-col`: Layout dọc
- `grow`: Main content tự động giãn ra để footer luôn ở dưới cùng

## ✅ Lợi ích

1. **DRY (Don't Repeat Yourself)**

   - Không cần import Header/Footer ở mỗi trang
   - Code sạch và dễ maintain

2. **Consistency**

   - Header và Footer nhất quán trên mọi trang
   - Dễ dàng thay đổi global layout

3. **Flexibility**

   - Có thể tùy chỉnh từng trang nếu cần
   - Props rõ ràng và dễ hiểu

4. **Smart Logic**
   - Tự động xử lý trang đặc biệt (wedding)
   - Không bị duplicate components

## 🔄 Update trong tương lai

Nếu cần thêm trang đặc biệt không dùng header từ layout:

```typescript
const specialPages = ["/wedding", "/", "/custom-page"];
const isSpecialPage = specialPages.includes(pathname);

if (showHeader && !isSpecialPage) {
  <Header alwaysShow={headerAlwaysShow} />;
}
```
