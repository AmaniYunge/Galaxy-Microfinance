/**
 * Instantiating the microfinanceApp module
 * Created by leo on 11/10/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp', ['ngRoute','ngCookies','datatables','720kb.datepicker','highcharts-ng'])
        .config(applicationConfiguration);
    applicationConfiguration.$inject = ['$routeProvider'];
    function applicationConfiguration ($routeProvider) {


        // Now set up the whens
        $routeProvider
            .when('/home', {
                templateUrl: "public/App/partials/dashboard.html"
            })

            .when('/dashboard', {
                templateUrl: "public/App/partials/dashboard.html",
                controller:"dashboardController"
            })

            //.when('/applicants', {
            //    templateUrl: "public/App/partials/applicants.html",
            //    controller:"applicantController"
            //})
            .when('/groups', {
                templateUrl: "public/App/partials/settings/groups/index.html",
                controller:"groupController"
            })
            .when('/groups/:id/edit', {
                templateUrl: "public/App/partials/settings/groups/edit.html",
                controller:"groupController"
            })

            .when('/groups/add', {
                templateUrl: "public/App/partials/settings/groups/add.html",
                controller:"groupController"
            })

            .when('/applicants/add', {
                templateUrl: "public/App/partials/settings/applicants/add.html",
                controller:"applicantController"
            })

            .when('/applicants/', {
                templateUrl: "public/App/partials/settings/applicants/index.html",
                controller:"applicantController"
            })

            .when('/applicant/:id', {
                templateUrl: "public/App/partials/settings/applicants/view.html",
                controller:"applicantController"
            })
            .when('/applicant/:id/interview', {
                templateUrl: "public/App/partials/settings/applicants/assessments/index.html",
                controller:"applicantController"
            })
            .when('/applicant/:id/interview/add', {
                templateUrl: "public/App/partials/settings/applicants/assessments/add.html",
                controller:"applicantController"
            })
            .when('/applicant/:id/interview/edit', {
                templateUrl: "public/App/partials/settings/applicants/assessments/edit.html",
                controller:"applicantController"
            })

            .when('/applicant/:id/edit', {
                templateUrl: "public/App/partials/settings/applicants/edit.html",
                controller:"applicantController"
            })
            .when('/applicant/:id/application', {
                templateUrl: "public/App/partials/applicants/applications.html",
                controller:"applicantController"
            })

            .when('/accounts', {

                templateUrl: "public/App/partials/applicants.html"
            }).when('/accounts/balance_sheet', {
                templateUrl: "public/App/partials/accounts/finance/balance_sheet.html",
                controller:"balanceSheetController"
            }).when('/accounts/finances', {
                templateUrl: "public/App/partials/accounts/finance/index.html"
            }).when('/accounts/capital_account', {
                templateUrl: "public/App/partials/accounts/finance/capital_account.html"
            }).when('/accounts/cash_account', {
                templateUrl: "public/App/partials/accounts/finance/cash_account.html"
            })
            .when('/accounts/income_statement', {
                templateUrl: "public/App/partials/accounts/finance/income_statement.html",
                controller:"incomeStatementController"
            }).when('/accounts/debtors', {
                templateUrl: "public/App/partials/settings/debtors/index.html",
                controller:"debtorsController"
            })
            .when('/accounts/balance_sheet', {
                templateUrl: "public/App/partials/accounts/finance/balance_sheet.html"
            })
            .when('/settings/loans', {
                templateUrl: "public/App/partials/settings/loans/index.html",
                controller:"loanController"
            })
            .when('/settings/loans/add', {
                templateUrl: "public/App/partials/settings/loans/add.html",
                controller:"loanController"
            })
            .when('/settings/loans/:id/edit', {
                templateUrl: "public/App/partials/settings/loans/edit.html",
                controller:"loanController"
            })
            .when('/settings/loans/:id/applications', {
                templateUrl: "public/App/partials/settings/loans/applications.html",
                controller:"loanController"
            })
            .when('/settings/interview', {
                templateUrl: "public/App/partials/settings/assessment/index.html",
                controller:"assessmentController"
            })
            .when('/settings/interview/more/:id', {
                templateUrl: "public/App/partials/settings/assessment/more.html"
            })
            .when('/settings/interview/add', {
                templateUrl: "public/App/partials/settings/assessment/add.html",
                controller:"assessmentController"
            })
            .when('/settings/interview/:id/edit', {
                templateUrl: "public/App/partials/settings/assessment/edit.html",
                controller:"assessmentController"
            })
            .when('/settings/expenses', {
                templateUrl: "public/App/partials/settings/expenses/index.html",
                controller:"expensesController"
            })
            .when('/settings/liabilities', {
                templateUrl: "public/App/partials/settings/liabilities/index.html",
                controller:"liabilityController"
            })
            .when('/settings/assets', {
                templateUrl: "public/App/partials/settings/assets/index.html",
                controller:"assetController"
            }).when('/settings/start_capital', {
                templateUrl: "public/App/partials/settings/start_capital/index.html",
                controller:"companyController"
            })
            .when('/applications', {
                templateUrl: "public/App/partials/settings/applications/index.html",
                controller:"applicationController"
            })
            .when('/applications/:id/more', {
                templateUrl: "public/App/partials/settings/applications/more.html",
                controller:"applicationController"
            })
            .when('/applications/add', {
                templateUrl: "public/App/partials/settings/applications/add.html",
                controller:"applicationController"
            })
            .when('/applications/edit', {
                templateUrl: "public/App/partials/settings/applications/more.html",
                controller:"applicationController"
            })
            .when('/applications/delete', {
                templateUrl: "public/App/partials/settings/applications/more.html",
                controller:"applicationController"
            })
            .when('/applications/:id/:applicant_id/grant', {
                templateUrl: "public/App/partials/settings/applications/grant.html",
                controller:"applicationController"
            })
            //.when('/settings/applications/:id/decline', {
            //    templateUrl: "public/App/partials/settings/applications/index.html",
            //    controller:"applicationController"
            //})

            .when('/users/add', {
                 templateUrl: "public/App/partials/settings/users/add.html"
            })
            .when('/users/:id/edit', {
                 templateUrl: "public/App/partials/settings/users/edit.html"
            })
            .when('/users/manage', {
               templateUrl: "public/App/partials/settings/users/index.html"
            })
            .otherwise("/dashboard");
    }
})();
