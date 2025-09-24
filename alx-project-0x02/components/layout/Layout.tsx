import Header from "./Header";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
