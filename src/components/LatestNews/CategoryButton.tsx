interface CategoryButtonProps {
  category: string;
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  return (
    <button className="btn glass rounded-3xl border-solid border-white text-lg  text-white md:w-28">
      {category}
    </button>
  );
};

export default CategoryButton;
