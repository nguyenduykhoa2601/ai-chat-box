import "./globals.scss";
import { ConfigProvider } from "antd";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ConfigProvider>{children}</ConfigProvider>
			</body>
		</html>
	);
}
