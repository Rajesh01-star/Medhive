import Link from "next/link";

function PageLink(props) {
  return (
    <div>
      <Link
        href={props.href}
        className="text-gray-300 px-6 py-1 rounded-full border border-white transition-all ease-in-out hover:text-white hover:border-t-4 mr-4"
      >
        {props.href}
      </Link>
    </div>
  );
}

export default PageLink;
