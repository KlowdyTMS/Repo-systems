import { useMediaQuery } from "@chakra-ui/react";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";

export function Sidebar() {
  const [mobile] = useMediaQuery("(max-width: 800px)");

  return <>{mobile ? <MobileSidebar /> : <DesktopSidebar />}</>;
}
