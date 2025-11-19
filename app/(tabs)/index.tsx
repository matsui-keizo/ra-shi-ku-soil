import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function MoyaMoyaScreen() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("ja-JP"));

  const handleSave = () => {
    alert("保存ボタンが押されました！\n（まだ保存処理はこれから）");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>今日のモヤモヤ</Text>

      <Text style={styles.label}>日付</Text>
      <Text style={styles.dateBox}>{date}</Text>

      <Text style={styles.label}>ジャーナリング</Text>
      <TextInput
        style={styles.textArea}
        multiline
        value={text}
        onChangeText={setText}
        placeholder="今日の気持ちを書いてみてください"
      />

      <Button title="肥料にする（保存）" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
  },
  dateBox: {
    padding: 10,
    backgroundColor: "#eef",
    borderRadius: 8,
    marginBottom: 10,
  },
  textArea: {
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20,
  },
});
