import Link from "next/link";
import { Recipe } from '../models/recipe.model';

type Props = {
    recipe: Recipe;
};
  
const RecipeListItem: React.FC<Props> = ({ recipe }) => {
    return (
        <Link href="/recipe/[id]" as={`/recipe/${recipe.id}`}>
            <a>
                <article>
                    <div>
                        <span>{recipe.title}</span>
                    </div>
                </article>
            </a>
        </Link>
    );
    };

export { RecipeListItem };