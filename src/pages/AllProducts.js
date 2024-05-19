import { BestSellingCards } from "../components/BestSellingCards"
import { OurProductsCards } from "../components/OurProductsCards"
import { ProjectsCards } from "../components/ProjectsCards"

const AllProducts = () => {
  return (
    <div className="all-products">
      <ProjectsCards />
      <BestSellingCards />
      <OurProductsCards />
    </div>
  )
}

export default AllProducts