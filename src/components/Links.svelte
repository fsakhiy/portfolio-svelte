<script lang="ts">
    export let text: string;
    export let url: string;
</script>

<a href={url} target="_blank">
    <div class="px-3 py-2 rounded-lg border hover:bg-gray-200">
        {text}
    </div>
</a>