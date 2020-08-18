import React from "react";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placerholder="category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
