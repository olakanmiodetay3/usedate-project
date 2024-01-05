<template>
  <div class="container">
    <p>Date: {{ dates }}</p>
    <div>
      Add Date:
      <input type="text" name="day" @change="handleInputChange" />
      <br />
      Add Month:
      <input type="text" name="month" @change="handleInputChange" />
      <br />
      <div class="space-x-2">
        <button @click="handleClick">Calculate Date</button>
        <button @click="handleRefresh">Refresh</button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import useDate from "../composables/useDate";
const { date, getDay, getMonth, addDay, addMonth } = useDate();

const daysToAdd = ref("");
const monthsToAdd = ref("");
// const heading = ref("Current Date");

const dates = ref(date.toString());

// const dates = ref(JSON.stringify(date));

const handleInputChange = (event) => {
  // You were trying to grab/read "name" from the input element but your input element doesn't have a name attribute, so I added a name attribute that matches the name === "day" and name === "month" in the handleInputChange function in your template.

  let { name, value } = event.target;
  if (name === "day") {
    if (!value) value = "0";
    daysToAdd.value = parseInt(value);
  } else if (name === "month") {
    if (!value) value = "0";
    monthsToAdd.value = parseInt(value);
  }
};

const handleAddDaysAndMonths = () => {
  let newDate;
  newDate = addDay(daysToAdd.value);
  newDate = addMonth(monthsToAdd.value);
  return newDate
};

const handleClick = () => {
  const result = handleAddDaysAndMonths();
  dates.value = result.toString();

  if (result instanceof Date) {
    // This is commented out because after clicking the button, it updates the date to something like 12/13/2023, instead of the full version. You can uncomment to see how it works.
    // dates.value = result.toLocaleDateString();
  } else {
    console.error("handleAddDaysAndMonths() did not return a valid date");
  }
};
const handleRefresh = () => {
  window.location.reload()
}
</script>
  
<style scoped></style>
  