import { useMediaQuery } from "@chakra-ui/react";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";

export function Sidebar() {
  const [mobile] = useMediaQuery("(max-width: 767px)");

  return <>{mobile ? <MobileSidebar /> : <DesktopSidebar />}</>;
}
