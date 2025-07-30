import AuthorLink from "./AuthorLink";

export default function PostContent() {
  return (
    <article className="prose prose-lg prose-blue max-w-none font-body text-gray-800">
      <h1 className="font-heading text-4xl text-gray-900 mb-2">
        <b>int </b>keyword in C Programming Language
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 font-body mb-6">

     <AuthorLink authorSlug="prem01" />
      <span>| July 20, 2024</span>
    </div>

      <img
        src="https://codolog.in/wp-content/uploads/2023/11/int-keyword-in-c.png"
        alt="int in C"
        className="w-full rounded-md mb-8"
      />

      <p>
        In C programming, <code className="bg-gray-100 px-1 rounded">int</code> is a fundamental data type used to store integer values.
      </p>

      <h2>What is int in C?</h2>
      <p>
        The keyword <code className="bg-gray-100 px-1 rounded">int</code> stands for “integer” and is used to declare variables that store whole numbers.
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        <code>{`#include <stdio.h>

int main() {
    int age = 25;
    printf("Age: %d", age);
    return 0;
}`}</code>
      </pre>

      <h2>Size of int</h2>
      <p>On most systems:</p>
      <ul>
        <li>int = 4 bytes</li>
        <li>Range: -2,147,483,648 to 2,147,483,647</li>
      </ul>

      <h2>Format Specifier</h2>
      <p>
        <code>%d</code> is the format specifier used with printf to print int values.
      </p>

      <h2>Conclusion</h2>
      <p>
        The <code>int</code> keyword is essential in C for working with numbers. It’s one of the first data types you'll use when learning C.
      </p>
    </article>
  );
}
