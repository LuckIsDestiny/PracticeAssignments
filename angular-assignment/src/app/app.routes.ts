import { Routes } from '@angular/router';
import { ProductCardComponent } from './components/Ans_1/product-card/product-card.component';
import { RoleComponent } from './components/Ans_2/role/role.component';
import { FeedbackComponent } from './components/Ans_3/feedback/feedback.component';
import { ProductsNewComponent } from './components/Ans_4/products-new/products-new.component';
import { PipeTutorialComponent } from './components/Ans_5/pipe-tutorial/pipe-tutorial.component';
import { ProductListComponent } from './components/Ans_6/product-list/product-list.component';
import { CartFormComponent } from './components/Ans_7/cart-form/cart-form.component';
import { HttpClientDemoComponent } from './components/Ans_8/http-client-demo/http-client-demo.component';
import { BlogComponent } from './components/Ans_9/blog/blog.component';
import { ProductFilterComponent } from './components/Ans_10/product-filter/product-filter.component';

export const routes: Routes = [
    {path: 'product', component: ProductCardComponent},
    {path: 'role', component: RoleComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'products-new', component: ProductsNewComponent},
    {path: 'price', component: PipeTutorialComponent},
    {path: 'prod-parent', component: ProductListComponent},
    {path: 'form-group', component: CartFormComponent},
    {path: 'client', component: HttpClientDemoComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'pro-fil/:category', component: ProductFilterComponent}
];
