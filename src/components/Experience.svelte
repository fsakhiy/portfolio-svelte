<script lang="ts">
  export let place: string = "Company Name";
  export let role: string = "Job Title";
  export let type: string = "Full-time"; // or "Intern", "Part-time"
  export let start_date: string;
  export let end_date: string;
  export let location: string = "City, Country";
  export let id: string;

  // Format the dates to "Month Year"
  let formattedStartDate = new Date(start_date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  let formattedEndDate = end_date
    ? new Date(end_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "now";
</script>

<div
  class="border border-gray-200 p-4 rounded-lg shadow-sm flex items-center space-x-4 max-w-3xl w-full"
>
  <div class="flex-grow">
    <div class="text-lg font-semibold text-gray-800">{role}</div>
    <div class="text-gray-600">{place}</div>
  </div>
  <div class="flex flex-col text-sm text-gray-500 text-right">
    <span>{type}</span>
    <span>{formattedStartDate} - {formattedEndDate}</span>
    <span>{location}</span>
  </div>
</div>
