export default function EditPage() {
  return (
    <div>
      <article className="flex flex-col *:outline-none py-20">
        <h1 contentEditable className="text-4xl font-semibold p-2">
          title
        </h1>
        <p contentEditable className="min-h-24 text-lg p-2">
          start here
        </p>
      </article>
    </div>
  )
}
