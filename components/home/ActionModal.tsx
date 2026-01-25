import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

type ActionModalProp = {
  isOpen: boolean;
  onClose: () => void;
  selectedRecord: string | null;
  onDelete: (id: string) => void;
};

export default function ActionModal({
  isOpen,
  onClose,
  selectedRecord,
  onDelete,
}: ActionModalProp) {
  async function handleDelete() {
    if (!selectedRecord) return;
    onDelete(selectedRecord);
    onClose();
  }
  return (
    <Modal visible={isOpen} transparent animationType="fade">
      <View className="bg-black/50 flex-1 justify-center items-center">
        <View className="bg-surface w-72 rounded-xl p-6">
          <Text className="text-white mb-4 text-center">Edit or Delete</Text>
          <Text className="text-white mb-4">{selectedRecord}</Text>
          <Pressable onPress={handleDelete} className="mb-8">
            <Text className="text-red-500">Delete</Text>
          </Pressable>
          <Pressable onPress={onClose}>
            <Text className="text-red-500">Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
