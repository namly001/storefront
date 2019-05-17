import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, PlatformLocation } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule, Options } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import { AccountAddressBookComponent } from './components/account-address-book/account-address-book.component';
import { AccountAddressDetailComponent } from './components/account-address-detail/account-address-detail.component';
import { AccountChangeCredentialsComponent } from './components/account-change-credentials/account-change-credentials.component';
import { AccountCustomerDetailsComponent } from './components/account-customer-details/account-customer-details.component';
import { AccountDashboardComponent } from './components/account-dashboard/account-dashboard.component';
import { AccountLinkComponent } from './components/account-link/account-link.component';
import { AccountOrderDetailComponent } from './components/account-order-detail/account-order-detail.component';
import { AccountOrderListComponent } from './components/account-order-list/account-order-list.component';
import { AccountComponent } from './components/account/account.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { CartContentsComponent } from './components/cart-contents/cart-contents.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { CartToggleComponent } from './components/cart-toggle/cart-toggle.component';
import { CenteredCardComponent } from './components/centered-card/centered-card.component';
import { ChangeEmailAddressComponent } from './components/change-email-address/change-email-address.component';
import { CheckoutConfirmationComponent } from './components/checkout-confirmation/checkout-confirmation.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutProcessComponent } from './components/checkout-process/checkout-process.component';
import { CheckoutShippingComponent } from './components/checkout-shipping/checkout-shipping.component';
import { CheckoutSignInComponent } from './components/checkout-sign-in/checkout-sign-in.component';
import { CheckoutStageIndicatorComponent } from './components/checkout-stage-indicator/checkout-stage-indicator.component';
import { CollectionBreadcrumbsComponent } from './components/collection-breadcrumbs/collection-breadcrumbs.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { CollectionsMenuComponent } from './components/collections-menu/collections-menu.component';
import { DropdownContentDirective } from './components/dropdown/dropdown-content.directive';
import { DropdownTriggerDirective } from './components/dropdown/dropdown-trigger.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { LayoutFooterComponent } from './components/layout/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout/layout-header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DialogButtonsDirective } from './components/modal-dialog/dialog-buttons.directive';
import { DialogComponentOutletComponent } from './components/modal-dialog/dialog-component-outlet.component';
import { DialogTitleDirective } from './components/modal-dialog/dialog-title.directive';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListControlsComponent } from './components/product-list-controls/product-list-controls.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchBarComponent } from './components/product-search-bar/product-search-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VerifyComponent } from './components/verify/verify.component';
import { buildIconLibrary } from './icon-library';
import { CollectionUrlPipe } from './pipes/collection-url.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { ProductUrlPipe } from './pipes/product-url.pipe';
import { CustomHttpTranslationLoader } from './providers/i18n/custom-http-loader';

const COMPONENTS = [
    ProductListComponent,
    ProductDetailComponent,
    CartToggleComponent,
    CartContentsComponent,
    AccountLinkComponent,
    SignInComponent,
    AccountDashboardComponent,
    CheckoutProcessComponent,
    CartDrawerComponent,
    CheckoutSignInComponent,
    CheckoutShippingComponent,
    AddressFormComponent,
    CheckoutPaymentComponent,
    CheckoutStageIndicatorComponent,
    CheckoutConfirmationComponent,
    RegisterComponent,
    VerifyComponent,
    CenteredCardComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    CollectionsMenuComponent,
    ProductCardComponent,
    DropdownComponent,
    DropdownTriggerDirective,
    DropdownContentDirective,
    CollectionBreadcrumbsComponent,
    ProductListControlsComponent,
    ProductSearchBarComponent,
    AccountOrderListComponent,
    AccountComponent,
    AccountOrderDetailComponent,
    AccountAddressBookComponent,
    AccountCustomerDetailsComponent,
    AccountChangeCredentialsComponent,
    AddressCardComponent,
    ChangeEmailAddressComponent,
    AccountAddressDetailComponent,
    ResetPasswordComponent,
    ForgottenPasswordComponent,
    DialogButtonsDirective,
    DialogTitleDirective,
    DialogComponentOutletComponent,
    ModalDialogComponent,
    AddressModalComponent,
    CollectionCardComponent,
];

const PIPES = [
    FormatPricePipe,
    CollectionUrlPipe,
    ProductUrlPipe,
];

export interface StorefrontConfig {
    apolloOptions: Options;
}

export const STORE_CONFIG = new InjectionToken('STORE_CONFIG');

export function HttpLoaderFactory(http: HttpClient, location: PlatformLocation) {
    // Dynamically get the baseHref, which is configured in the angular.json file
    const baseHref = location.getBaseHrefFromDOM();
    return new CustomHttpTranslationLoader(http, baseHref + '/i18n/');
}

@NgModule({
    declarations: [
        ...COMPONENTS, ...PIPES,
    ],
    entryComponents: [
        AddressModalComponent,
        ModalDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([]),
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        FontAwesomeModule,
        OverlayModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient, PlatformLocation],
            },
            compiler: { provide: TranslateCompiler, useClass: TranslateMessageFormatCompiler },
        }),
    ],
    exports: [
        ...COMPONENTS, ...PIPES,
    ],
})
export class StorefrontModule {

    static forRoot(config: StorefrontConfig): ModuleWithProviders {
        return {
            ngModule: StorefrontModule,
            providers: [
                { provide: STORE_CONFIG, useValue: config },
                {
                    provide: APOLLO_OPTIONS,
                    useFactory: apolloOptionsFactory,
                    deps: [HttpLink, STORE_CONFIG],
                },
            ],
        };
    }

    constructor() {
        buildIconLibrary();
    }
}

export function apolloOptionsFactory(httpLink: HttpLink, config: StorefrontConfig) {
    // Note: the intermediate assignment to `fn` is required to prevent
    // an angular compiler error. See https://stackoverflow.com/a/51977115/772859
    const result = {
        cache: new InMemoryCache(),
        link: httpLink.create(config.apolloOptions),
    };
    return result;
}
