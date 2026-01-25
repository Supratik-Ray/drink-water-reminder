import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback } from "react";

export default function BottomSheetContainer({
  children,
  bottomSheetRef,
}: {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetModal | null>;
}) {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enableDynamicSizing={false}
      snapPoints={["60%"]}
      backdropComponent={renderBackdrop}
      enableDismissOnClose
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: "#1E293B",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
      handleIndicatorStyle={{
        backgroundColor: "#94A3B8",
      }}
    >
      <BottomSheetView className="flex-1 p-10 items-center">
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
}
