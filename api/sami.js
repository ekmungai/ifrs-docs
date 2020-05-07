
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:IFRS" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS.html">IFRS</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:IFRS_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Exceptions_AdjustingReportingPeriod" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/AdjustingReportingPeriod.html">AdjustingReportingPeriod</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_ClosedReportingPeriod" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/ClosedReportingPeriod.html">ClosedReportingPeriod</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_HangingClearances" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/HangingClearances.html">HangingClearances</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_HangingTransactions" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/HangingTransactions.html">HangingTransactions</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_IFRSException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/IFRSException.html">IFRSException</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InsufficientBalance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InsufficientBalance.html">InsufficientBalance</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidAccountClassBalance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidAccountClassBalance.html">InvalidAccountClassBalance</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidAccountType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidAccountType.html">InvalidAccountType</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidBalance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidBalance.html">InvalidBalance</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidBalanceTransaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidBalanceTransaction.html">InvalidBalanceTransaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidClearanceAccount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidClearanceAccount.html">InvalidClearanceAccount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidClearanceCurrency" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidClearanceCurrency.html">InvalidClearanceCurrency</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_InvalidClearanceEntry" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/InvalidClearanceEntry.html">InvalidClearanceEntry</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_LineItemAccount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/LineItemAccount.html">LineItemAccount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MainAccount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MainAccount.html">MainAccount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MissingAccount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MissingAccount.html">MissingAccount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MissingAccountType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MissingAccountType.html">MissingAccountType</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MissingLineItem" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MissingLineItem.html">MissingLineItem</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MissingReportingPeriod" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MissingReportingPeriod.html">MissingReportingPeriod</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_MissingVatAccount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/MissingVatAccount.html">MissingVatAccount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_NegativeAmount" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/NegativeAmount.html">NegativeAmount</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_OverClearance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/OverClearance.html">OverClearance</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_PostedTransaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/PostedTransaction.html">PostedTransaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_RedundantTransaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/RedundantTransaction.html">RedundantTransaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_SelfClearance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/SelfClearance.html">SelfClearance</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_UnassignableTransaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/UnassignableTransaction.html">UnassignableTransaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_UnauthorizedUser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/UnauthorizedUser.html">UnauthorizedUser</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_UnclearableTransaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/UnclearableTransaction.html">UnclearableTransaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_UnpostedAssignment" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/UnpostedAssignment.html">UnpostedAssignment</a>                    </div>                </li>                            <li data-name="class:IFRS_Exceptions_VatCharge" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Exceptions/VatCharge.html">VatCharge</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Interfaces" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Interfaces.html">Interfaces</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Interfaces_Assignable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Assignable.html">Assignable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Buys" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Buys.html">Buys</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Clearable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Clearable.html">Clearable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Fetchable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Fetchable.html">Fetchable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Findable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Findable.html">Findable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Recyclable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Recyclable.html">Recyclable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Segragatable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Segragatable.html">Segragatable</a>                    </div>                </li>                            <li data-name="class:IFRS_Interfaces_Sells" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Interfaces/Sells.html">Sells</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Models" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Models_Account" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Account.html">Account</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Assignment" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Assignment.html">Assignment</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Balance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Balance.html">Balance</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Category" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Category.html">Category</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Currency" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Currency.html">Currency</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Entity" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Entity.html">Entity</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_ExchangeRate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/ExchangeRate.html">ExchangeRate</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Ledger" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Ledger.html">Ledger</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_LineItem" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/LineItem.html">LineItem</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_RecycledObject" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/RecycledObject.html">RecycledObject</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_ReportingPeriod" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/ReportingPeriod.html">ReportingPeriod</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Transaction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Transaction.html">Transaction</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_User" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/User.html">User</a>                    </div>                </li>                            <li data-name="class:IFRS_Models_Vat" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Models/Vat.html">Vat</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Reports" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Reports.html">Reports</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Reports_AccountSchedule" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/AccountSchedule.html">AccountSchedule</a>                    </div>                </li>                            <li data-name="class:IFRS_Reports_AccountStatement" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/AccountStatement.html">AccountStatement</a>                    </div>                </li>                            <li data-name="class:IFRS_Reports_BalanceSheet" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/BalanceSheet.html">BalanceSheet</a>                    </div>                </li>                            <li data-name="class:IFRS_Reports_FinancialStatement" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/FinancialStatement.html">FinancialStatement</a>                    </div>                </li>                            <li data-name="class:IFRS_Reports_IncomeStatement" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/IncomeStatement.html">IncomeStatement</a>                    </div>                </li>                            <li data-name="class:IFRS_Reports_TrialBalance" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Reports/TrialBalance.html">TrialBalance</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Scopes" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Scopes.html">Scopes</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Scopes_EntityScope" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Scopes/EntityScope.html">EntityScope</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Traits" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Traits_Assigning" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Assigning.html">Assigning</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Buying" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Buying.html">Buying</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Clearing" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Clearing.html">Clearing</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Fetching" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Fetching.html">Fetching</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Finding" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Finding.html">Finding</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Recycling" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Recycling.html">Recycling</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Segragating" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Segragating.html">Segragating</a>                    </div>                </li>                            <li data-name="class:IFRS_Traits_Selling" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Traits/Selling.html">Selling</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:IFRS_Transactions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="IFRS/Transactions.html">Transactions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:IFRS_Transactions_CashPurchase" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/CashPurchase.html">CashPurchase</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_CashSale" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/CashSale.html">CashSale</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_ClientInvoice" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/ClientInvoice.html">ClientInvoice</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_ClientReceipt" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/ClientReceipt.html">ClientReceipt</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_ContraEntry" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/ContraEntry.html">ContraEntry</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_CreditNote" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/CreditNote.html">CreditNote</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_DebitNote" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/DebitNote.html">DebitNote</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_JournalEntry" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/JournalEntry.html">JournalEntry</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_SupplierBill" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/SupplierBill.html">SupplierBill</a>                    </div>                </li>                            <li data-name="class:IFRS_Transactions_SupplierPayment" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="IFRS/Transactions/SupplierPayment.html">SupplierPayment</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:IFRS_IFRSServiceProvider" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="IFRS/IFRSServiceProvider.html">IFRSServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "IFRS.html", "name": "IFRS", "doc": "Namespace IFRS"},{"type": "Namespace", "link": "IFRS/Exceptions.html", "name": "IFRS\\Exceptions", "doc": "Namespace IFRS\\Exceptions"},{"type": "Namespace", "link": "IFRS/Interfaces.html", "name": "IFRS\\Interfaces", "doc": "Namespace IFRS\\Interfaces"},{"type": "Namespace", "link": "IFRS/Models.html", "name": "IFRS\\Models", "doc": "Namespace IFRS\\Models"},{"type": "Namespace", "link": "IFRS/Reports.html", "name": "IFRS\\Reports", "doc": "Namespace IFRS\\Reports"},{"type": "Namespace", "link": "IFRS/Scopes.html", "name": "IFRS\\Scopes", "doc": "Namespace IFRS\\Scopes"},{"type": "Namespace", "link": "IFRS/Traits.html", "name": "IFRS\\Traits", "doc": "Namespace IFRS\\Traits"},{"type": "Namespace", "link": "IFRS/Transactions.html", "name": "IFRS\\Transactions", "doc": "Namespace IFRS\\Transactions"},
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Assignable.html", "name": "IFRS\\Interfaces\\Assignable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Assignable", "fromLink": "IFRS/Interfaces/Assignable.html", "link": "IFRS/Interfaces/Assignable.html#method_balance", "name": "IFRS\\Interfaces\\Assignable::balance", "doc": "&quot;Balance Remaining on Transaction.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Buys.html", "name": "IFRS\\Interfaces\\Buys", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Buys", "fromLink": "IFRS/Interfaces/Buys.html", "link": "IFRS/Interfaces/Buys.html#method_save", "name": "IFRS\\Interfaces\\Buys::save", "doc": "&quot;Validate Buying Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Buys", "fromLink": "IFRS/Interfaces/Buys.html", "link": "IFRS/Interfaces/Buys.html#method_post", "name": "IFRS\\Interfaces\\Buys::post", "doc": "&quot;Validate Buying Transaction LineItems.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Clearable.html", "name": "IFRS\\Interfaces\\Clearable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Clearable", "fromLink": "IFRS/Interfaces/Clearable.html", "link": "IFRS/Interfaces/Clearable.html#method_clearedAmount", "name": "IFRS\\Interfaces\\Clearable::clearedAmount", "doc": "&quot;Cleared Transaction amount.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Clearable", "fromLink": "IFRS/Interfaces/Clearable.html", "link": "IFRS/Interfaces/Clearable.html#method_getClearedType", "name": "IFRS\\Interfaces\\Clearable::getClearedType", "doc": "&quot;Cleared Object type.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Fetchable.html", "name": "IFRS\\Interfaces\\Fetchable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Fetchable", "fromLink": "IFRS/Interfaces/Fetchable.html", "link": "IFRS/Interfaces/Fetchable.html#method_fetch", "name": "IFRS\\Interfaces\\Fetchable::fetch", "doc": "&quot;Fetch Transaction by given filters.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Findable.html", "name": "IFRS\\Interfaces\\Findable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Findable", "fromLink": "IFRS/Interfaces/Findable.html", "link": "IFRS/Interfaces/Findable.html#method_find", "name": "IFRS\\Interfaces\\Findable::find", "doc": "&quot;Find Transaction by given Id.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Recyclable.html", "name": "IFRS\\Interfaces\\Recyclable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Recyclable", "fromLink": "IFRS/Interfaces/Recyclable.html", "link": "IFRS/Interfaces/Recyclable.html#method_bootRecycling", "name": "IFRS\\Interfaces\\Recyclable::bootRecycling", "doc": "&quot;Model recycling events.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Recyclable", "fromLink": "IFRS/Interfaces/Recyclable.html", "link": "IFRS/Interfaces/Recyclable.html#method_recycled", "name": "IFRS\\Interfaces\\Recyclable::recycled", "doc": "&quot;Recycled Model records.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Segragatable.html", "name": "IFRS\\Interfaces\\Segragatable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Segragatable", "fromLink": "IFRS/Interfaces/Segragatable.html", "link": "IFRS/Interfaces/Segragatable.html#method_bootSegragating", "name": "IFRS\\Interfaces\\Segragatable::bootSegragating", "doc": "&quot;Register EntityScope for Model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Segragatable", "fromLink": "IFRS/Interfaces/Segragatable.html", "link": "IFRS/Interfaces/Segragatable.html#method_entity", "name": "IFRS\\Interfaces\\Segragatable::entity", "doc": "&quot;Model&#039;s Parent Entity.&quot;"},
            
            {"type": "Interface", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Sells.html", "name": "IFRS\\Interfaces\\Sells", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Sells", "fromLink": "IFRS/Interfaces/Sells.html", "link": "IFRS/Interfaces/Sells.html#method_save", "name": "IFRS\\Interfaces\\Sells::save", "doc": "&quot;Validate Selling Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Sells", "fromLink": "IFRS/Interfaces/Sells.html", "link": "IFRS/Interfaces/Sells.html#method_post", "name": "IFRS\\Interfaces\\Sells::post", "doc": "&quot;Validate Selling Transaction LineItems.&quot;"},
            
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/AdjustingReportingPeriod.html", "name": "IFRS\\Exceptions\\AdjustingReportingPeriod", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\AdjustingReportingPeriod", "fromLink": "IFRS/Exceptions/AdjustingReportingPeriod.html", "link": "IFRS/Exceptions/AdjustingReportingPeriod.html#method___construct", "name": "IFRS\\Exceptions\\AdjustingReportingPeriod::__construct", "doc": "&quot;Adjusting Reporting Period Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/ClosedReportingPeriod.html", "name": "IFRS\\Exceptions\\ClosedReportingPeriod", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\ClosedReportingPeriod", "fromLink": "IFRS/Exceptions/ClosedReportingPeriod.html", "link": "IFRS/Exceptions/ClosedReportingPeriod.html#method___construct", "name": "IFRS\\Exceptions\\ClosedReportingPeriod::__construct", "doc": "&quot;Closed Reporting Period Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/HangingClearances.html", "name": "IFRS\\Exceptions\\HangingClearances", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\HangingClearances", "fromLink": "IFRS/Exceptions/HangingClearances.html", "link": "IFRS/Exceptions/HangingClearances.html#method___construct", "name": "IFRS\\Exceptions\\HangingClearances::__construct", "doc": "&quot;Hanging Clearances Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/HangingTransactions.html", "name": "IFRS\\Exceptions\\HangingTransactions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\HangingTransactions", "fromLink": "IFRS/Exceptions/HangingTransactions.html", "link": "IFRS/Exceptions/HangingTransactions.html#method___construct", "name": "IFRS\\Exceptions\\HangingTransactions::__construct", "doc": "&quot;Hanging Transactions Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/IFRSException.html", "name": "IFRS\\Exceptions\\IFRSException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\IFRSException", "fromLink": "IFRS/Exceptions/IFRSException.html", "link": "IFRS/Exceptions/IFRSException.html#method___construct", "name": "IFRS\\Exceptions\\IFRSException::__construct", "doc": "&quot;IFRS Base Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InsufficientBalance.html", "name": "IFRS\\Exceptions\\InsufficientBalance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InsufficientBalance", "fromLink": "IFRS/Exceptions/InsufficientBalance.html", "link": "IFRS/Exceptions/InsufficientBalance.html#method___construct", "name": "IFRS\\Exceptions\\InsufficientBalance::__construct", "doc": "&quot;Insufficient Balance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidAccountClassBalance.html", "name": "IFRS\\Exceptions\\InvalidAccountClassBalance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidAccountClassBalance", "fromLink": "IFRS/Exceptions/InvalidAccountClassBalance.html", "link": "IFRS/Exceptions/InvalidAccountClassBalance.html#method___construct", "name": "IFRS\\Exceptions\\InvalidAccountClassBalance::__construct", "doc": "&quot;Wrong Account Class Balance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidAccountType.html", "name": "IFRS\\Exceptions\\InvalidAccountType", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidAccountType", "fromLink": "IFRS/Exceptions/InvalidAccountType.html", "link": "IFRS/Exceptions/InvalidAccountType.html#method___construct", "name": "IFRS\\Exceptions\\InvalidAccountType::__construct", "doc": "&quot;Invalid Account Type Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidBalance.html", "name": "IFRS\\Exceptions\\InvalidBalance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidBalance", "fromLink": "IFRS/Exceptions/InvalidBalance.html", "link": "IFRS/Exceptions/InvalidBalance.html#method___construct", "name": "IFRS\\Exceptions\\InvalidBalance::__construct", "doc": "&quot;Invalid Balance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidBalanceTransaction.html", "name": "IFRS\\Exceptions\\InvalidBalanceTransaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidBalanceTransaction", "fromLink": "IFRS/Exceptions/InvalidBalanceTransaction.html", "link": "IFRS/Exceptions/InvalidBalanceTransaction.html#method___construct", "name": "IFRS\\Exceptions\\InvalidBalanceTransaction::__construct", "doc": "&quot;Invalid Balance Transaction Balance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidClearanceAccount.html", "name": "IFRS\\Exceptions\\InvalidClearanceAccount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidClearanceAccount", "fromLink": "IFRS/Exceptions/InvalidClearanceAccount.html", "link": "IFRS/Exceptions/InvalidClearanceAccount.html#method___construct", "name": "IFRS\\Exceptions\\InvalidClearanceAccount::__construct", "doc": "&quot;Invalid Clearance Account Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidClearanceCurrency.html", "name": "IFRS\\Exceptions\\InvalidClearanceCurrency", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidClearanceCurrency", "fromLink": "IFRS/Exceptions/InvalidClearanceCurrency.html", "link": "IFRS/Exceptions/InvalidClearanceCurrency.html#method___construct", "name": "IFRS\\Exceptions\\InvalidClearanceCurrency::__construct", "doc": "&quot;Invalid Clearance Currency Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/InvalidClearanceEntry.html", "name": "IFRS\\Exceptions\\InvalidClearanceEntry", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\InvalidClearanceEntry", "fromLink": "IFRS/Exceptions/InvalidClearanceEntry.html", "link": "IFRS/Exceptions/InvalidClearanceEntry.html#method___construct", "name": "IFRS\\Exceptions\\InvalidClearanceEntry::__construct", "doc": "&quot;Invalid Clearance Entry Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/LineItemAccount.html", "name": "IFRS\\Exceptions\\LineItemAccount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\LineItemAccount", "fromLink": "IFRS/Exceptions/LineItemAccount.html", "link": "IFRS/Exceptions/LineItemAccount.html#method___construct", "name": "IFRS\\Exceptions\\LineItemAccount::__construct", "doc": "&quot;LineItem Account Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MainAccount.html", "name": "IFRS\\Exceptions\\MainAccount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MainAccount", "fromLink": "IFRS/Exceptions/MainAccount.html", "link": "IFRS/Exceptions/MainAccount.html#method___construct", "name": "IFRS\\Exceptions\\MainAccount::__construct", "doc": "&quot;Main Account Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MissingAccount.html", "name": "IFRS\\Exceptions\\MissingAccount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MissingAccount", "fromLink": "IFRS/Exceptions/MissingAccount.html", "link": "IFRS/Exceptions/MissingAccount.html#method___construct", "name": "IFRS\\Exceptions\\MissingAccount::__construct", "doc": "&quot;Missing Account Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MissingAccountType.html", "name": "IFRS\\Exceptions\\MissingAccountType", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MissingAccountType", "fromLink": "IFRS/Exceptions/MissingAccountType.html", "link": "IFRS/Exceptions/MissingAccountType.html#method___construct", "name": "IFRS\\Exceptions\\MissingAccountType::__construct", "doc": "&quot;Missing Account Type Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MissingLineItem.html", "name": "IFRS\\Exceptions\\MissingLineItem", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MissingLineItem", "fromLink": "IFRS/Exceptions/MissingLineItem.html", "link": "IFRS/Exceptions/MissingLineItem.html#method___construct", "name": "IFRS\\Exceptions\\MissingLineItem::__construct", "doc": "&quot;Missing Line Item Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MissingReportingPeriod.html", "name": "IFRS\\Exceptions\\MissingReportingPeriod", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MissingReportingPeriod", "fromLink": "IFRS/Exceptions/MissingReportingPeriod.html", "link": "IFRS/Exceptions/MissingReportingPeriod.html#method___construct", "name": "IFRS\\Exceptions\\MissingReportingPeriod::__construct", "doc": "&quot;Missing Reporting Period Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/MissingVatAccount.html", "name": "IFRS\\Exceptions\\MissingVatAccount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\MissingVatAccount", "fromLink": "IFRS/Exceptions/MissingVatAccount.html", "link": "IFRS/Exceptions/MissingVatAccount.html#method___construct", "name": "IFRS\\Exceptions\\MissingVatAccount::__construct", "doc": "&quot;Missing Vat Account Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/NegativeAmount.html", "name": "IFRS\\Exceptions\\NegativeAmount", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\NegativeAmount", "fromLink": "IFRS/Exceptions/NegativeAmount.html", "link": "IFRS/Exceptions/NegativeAmount.html#method___construct", "name": "IFRS\\Exceptions\\NegativeAmount::__construct", "doc": "&quot;Negative Amount Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/OverClearance.html", "name": "IFRS\\Exceptions\\OverClearance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\OverClearance", "fromLink": "IFRS/Exceptions/OverClearance.html", "link": "IFRS/Exceptions/OverClearance.html#method___construct", "name": "IFRS\\Exceptions\\OverClearance::__construct", "doc": "&quot;Over Clearance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/PostedTransaction.html", "name": "IFRS\\Exceptions\\PostedTransaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\PostedTransaction", "fromLink": "IFRS/Exceptions/PostedTransaction.html", "link": "IFRS/Exceptions/PostedTransaction.html#method___construct", "name": "IFRS\\Exceptions\\PostedTransaction::__construct", "doc": "&quot;Posted Transaction Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/RedundantTransaction.html", "name": "IFRS\\Exceptions\\RedundantTransaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\RedundantTransaction", "fromLink": "IFRS/Exceptions/RedundantTransaction.html", "link": "IFRS/Exceptions/RedundantTransaction.html#method___construct", "name": "IFRS\\Exceptions\\RedundantTransaction::__construct", "doc": "&quot;Redundant Transaction Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/SelfClearance.html", "name": "IFRS\\Exceptions\\SelfClearance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\SelfClearance", "fromLink": "IFRS/Exceptions/SelfClearance.html", "link": "IFRS/Exceptions/SelfClearance.html#method___construct", "name": "IFRS\\Exceptions\\SelfClearance::__construct", "doc": "&quot;Self Clearance Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/UnassignableTransaction.html", "name": "IFRS\\Exceptions\\UnassignableTransaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\UnassignableTransaction", "fromLink": "IFRS/Exceptions/UnassignableTransaction.html", "link": "IFRS/Exceptions/UnassignableTransaction.html#method___construct", "name": "IFRS\\Exceptions\\UnassignableTransaction::__construct", "doc": "&quot;Unassignable Transaction Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/UnauthorizedUser.html", "name": "IFRS\\Exceptions\\UnauthorizedUser", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\UnauthorizedUser", "fromLink": "IFRS/Exceptions/UnauthorizedUser.html", "link": "IFRS/Exceptions/UnauthorizedUser.html#method___construct", "name": "IFRS\\Exceptions\\UnauthorizedUser::__construct", "doc": "&quot;Unauthorized User Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/UnclearableTransaction.html", "name": "IFRS\\Exceptions\\UnclearableTransaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\UnclearableTransaction", "fromLink": "IFRS/Exceptions/UnclearableTransaction.html", "link": "IFRS/Exceptions/UnclearableTransaction.html#method___construct", "name": "IFRS\\Exceptions\\UnclearableTransaction::__construct", "doc": "&quot;Unclearable Transaction Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/UnpostedAssignment.html", "name": "IFRS\\Exceptions\\UnpostedAssignment", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\UnpostedAssignment", "fromLink": "IFRS/Exceptions/UnpostedAssignment.html", "link": "IFRS/Exceptions/UnpostedAssignment.html#method___construct", "name": "IFRS\\Exceptions\\UnpostedAssignment::__construct", "doc": "&quot;Unposted Assignment Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Exceptions", "fromLink": "IFRS/Exceptions.html", "link": "IFRS/Exceptions/VatCharge.html", "name": "IFRS\\Exceptions\\VatCharge", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Exceptions\\VatCharge", "fromLink": "IFRS/Exceptions/VatCharge.html", "link": "IFRS/Exceptions/VatCharge.html#method___construct", "name": "IFRS\\Exceptions\\VatCharge::__construct", "doc": "&quot;Vat Charge Exception&quot;"},
            
            {"type": "Class", "fromName": "IFRS", "fromLink": "IFRS.html", "link": "IFRS/IFRSServiceProvider.html", "name": "IFRS\\IFRSServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\IFRSServiceProvider", "fromLink": "IFRS/IFRSServiceProvider.html", "link": "IFRS/IFRSServiceProvider.html#method_register", "name": "IFRS\\IFRSServiceProvider::register", "doc": "&quot;Register services.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\IFRSServiceProvider", "fromLink": "IFRS/IFRSServiceProvider.html", "link": "IFRS/IFRSServiceProvider.html#method_boot", "name": "IFRS\\IFRSServiceProvider::boot", "doc": "&quot;Bootstrap services.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Assignable.html", "name": "IFRS\\Interfaces\\Assignable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Assignable", "fromLink": "IFRS/Interfaces/Assignable.html", "link": "IFRS/Interfaces/Assignable.html#method_balance", "name": "IFRS\\Interfaces\\Assignable::balance", "doc": "&quot;Balance Remaining on Transaction.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Buys.html", "name": "IFRS\\Interfaces\\Buys", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Buys", "fromLink": "IFRS/Interfaces/Buys.html", "link": "IFRS/Interfaces/Buys.html#method_save", "name": "IFRS\\Interfaces\\Buys::save", "doc": "&quot;Validate Buying Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Buys", "fromLink": "IFRS/Interfaces/Buys.html", "link": "IFRS/Interfaces/Buys.html#method_post", "name": "IFRS\\Interfaces\\Buys::post", "doc": "&quot;Validate Buying Transaction LineItems.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Clearable.html", "name": "IFRS\\Interfaces\\Clearable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Clearable", "fromLink": "IFRS/Interfaces/Clearable.html", "link": "IFRS/Interfaces/Clearable.html#method_clearedAmount", "name": "IFRS\\Interfaces\\Clearable::clearedAmount", "doc": "&quot;Cleared Transaction amount.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Clearable", "fromLink": "IFRS/Interfaces/Clearable.html", "link": "IFRS/Interfaces/Clearable.html#method_getClearedType", "name": "IFRS\\Interfaces\\Clearable::getClearedType", "doc": "&quot;Cleared Object type.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Fetchable.html", "name": "IFRS\\Interfaces\\Fetchable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Fetchable", "fromLink": "IFRS/Interfaces/Fetchable.html", "link": "IFRS/Interfaces/Fetchable.html#method_fetch", "name": "IFRS\\Interfaces\\Fetchable::fetch", "doc": "&quot;Fetch Transaction by given filters.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Findable.html", "name": "IFRS\\Interfaces\\Findable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Findable", "fromLink": "IFRS/Interfaces/Findable.html", "link": "IFRS/Interfaces/Findable.html#method_find", "name": "IFRS\\Interfaces\\Findable::find", "doc": "&quot;Find Transaction by given Id.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Recyclable.html", "name": "IFRS\\Interfaces\\Recyclable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Recyclable", "fromLink": "IFRS/Interfaces/Recyclable.html", "link": "IFRS/Interfaces/Recyclable.html#method_bootRecycling", "name": "IFRS\\Interfaces\\Recyclable::bootRecycling", "doc": "&quot;Model recycling events.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Recyclable", "fromLink": "IFRS/Interfaces/Recyclable.html", "link": "IFRS/Interfaces/Recyclable.html#method_recycled", "name": "IFRS\\Interfaces\\Recyclable::recycled", "doc": "&quot;Recycled Model records.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Segragatable.html", "name": "IFRS\\Interfaces\\Segragatable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Segragatable", "fromLink": "IFRS/Interfaces/Segragatable.html", "link": "IFRS/Interfaces/Segragatable.html#method_bootSegragating", "name": "IFRS\\Interfaces\\Segragatable::bootSegragating", "doc": "&quot;Register EntityScope for Model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Segragatable", "fromLink": "IFRS/Interfaces/Segragatable.html", "link": "IFRS/Interfaces/Segragatable.html#method_entity", "name": "IFRS\\Interfaces\\Segragatable::entity", "doc": "&quot;Model&#039;s Parent Entity.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Interfaces", "fromLink": "IFRS/Interfaces.html", "link": "IFRS/Interfaces/Sells.html", "name": "IFRS\\Interfaces\\Sells", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Interfaces\\Sells", "fromLink": "IFRS/Interfaces/Sells.html", "link": "IFRS/Interfaces/Sells.html#method_save", "name": "IFRS\\Interfaces\\Sells::save", "doc": "&quot;Validate Selling Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Interfaces\\Sells", "fromLink": "IFRS/Interfaces/Sells.html", "link": "IFRS/Interfaces/Sells.html#method_post", "name": "IFRS\\Interfaces\\Sells::post", "doc": "&quot;Validate Selling Transaction LineItems.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Account.html", "name": "IFRS\\Models\\Account", "doc": "&quot;Class Account&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method___construct", "name": "IFRS\\Models\\Account::__construct", "doc": "&quot;Construct new Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_getType", "name": "IFRS\\Models\\Account::getType", "doc": "&quot;Get Human Readable Account Type.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_getTypes", "name": "IFRS\\Models\\Account::getTypes", "doc": "&quot;Get Human Readable Account types&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_sectionBalances", "name": "IFRS\\Models\\Account::sectionBalances", "doc": "&quot;Chart of Account Section Balances for the Reporting Period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_currency", "name": "IFRS\\Models\\Account::currency", "doc": "&quot;Account Currency.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_category", "name": "IFRS\\Models\\Account::category", "doc": "&quot;Account Category.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_balances", "name": "IFRS\\Models\\Account::balances", "doc": "&quot;Account Balances.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_attributes", "name": "IFRS\\Models\\Account::attributes", "doc": "&quot;Account attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_openingBalance", "name": "IFRS\\Models\\Account::openingBalance", "doc": "&quot;Get Account&#039;s Opening Balance for the Reporting Period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_closingBalance", "name": "IFRS\\Models\\Account::closingBalance", "doc": "&quot;Get Account&#039;s Closing Balance for the Reporting Period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_save", "name": "IFRS\\Models\\Account::save", "doc": "&quot;Calculate Account Code.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Account", "fromLink": "IFRS/Models/Account.html", "link": "IFRS/Models/Account.html#method_delete", "name": "IFRS\\Models\\Account::delete", "doc": "&quot;Check for Current Year Transactions.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Assignment.html", "name": "IFRS\\Models\\Assignment", "doc": "&quot;Class Assignment&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Assignment", "fromLink": "IFRS/Models/Assignment.html", "link": "IFRS/Models/Assignment.html#method_transaction", "name": "IFRS\\Models\\Assignment::transaction", "doc": "&quot;Transaction to be cleared.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Assignment", "fromLink": "IFRS/Models/Assignment.html", "link": "IFRS/Models/Assignment.html#method_cleared", "name": "IFRS\\Models\\Assignment::cleared", "doc": "&quot;Transaction|Balance to be cleared.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Assignment", "fromLink": "IFRS/Models/Assignment.html", "link": "IFRS/Models/Assignment.html#method_attributes", "name": "IFRS\\Models\\Assignment::attributes", "doc": "&quot;Assignment attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Assignment", "fromLink": "IFRS/Models/Assignment.html", "link": "IFRS/Models/Assignment.html#method_save", "name": "IFRS\\Models\\Assignment::save", "doc": "&quot;Assignment Validation.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Balance.html", "name": "IFRS\\Models\\Balance", "doc": "&quot;Class Balance&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method___construct", "name": "IFRS\\Models\\Balance::__construct", "doc": "&quot;Construct new Balance.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_getType", "name": "IFRS\\Models\\Balance::getType", "doc": "&quot;Get Human Readable Balance Type.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_getTypes", "name": "IFRS\\Models\\Balance::getTypes", "doc": "&quot;Get Human Readable Balance types&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_isPosted", "name": "IFRS\\Models\\Balance::isPosted", "doc": "&quot;isPosted analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_isCredited", "name": "IFRS\\Models\\Balance::isCredited", "doc": "&quot;isCredited analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_getClearedType", "name": "IFRS\\Models\\Balance::getClearedType", "doc": "&quot;getClearedType analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_getAmount", "name": "IFRS\\Models\\Balance::getAmount", "doc": "&quot;getAmount analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_currency", "name": "IFRS\\Models\\Balance::currency", "doc": "&quot;Balance Currency.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_account", "name": "IFRS\\Models\\Balance::account", "doc": "&quot;Balance Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_exchangeRate", "name": "IFRS\\Models\\Balance::exchangeRate", "doc": "&quot;Balance Exchange Rate.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_attributes", "name": "IFRS\\Models\\Balance::attributes", "doc": "&quot;Balance attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Balance", "fromLink": "IFRS/Models/Balance.html", "link": "IFRS/Models/Balance.html#method_save", "name": "IFRS\\Models\\Balance::save", "doc": "&quot;Balance Validation.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Category.html", "name": "IFRS\\Models\\Category", "doc": "&quot;Class Category&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Category", "fromLink": "IFRS/Models/Category.html", "link": "IFRS/Models/Category.html#method_accounts", "name": "IFRS\\Models\\Category::accounts", "doc": "&quot;Category Accounts.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Category", "fromLink": "IFRS/Models/Category.html", "link": "IFRS/Models/Category.html#method_attributes", "name": "IFRS\\Models\\Category::attributes", "doc": "&quot;Category attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Currency.html", "name": "IFRS\\Models\\Currency", "doc": "&quot;Class Currency&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Currency", "fromLink": "IFRS/Models/Currency.html", "link": "IFRS/Models/Currency.html#method_exchangeRates", "name": "IFRS\\Models\\Currency::exchangeRates", "doc": "&quot;Currency Exchange Rates.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Currency", "fromLink": "IFRS/Models/Currency.html", "link": "IFRS/Models/Currency.html#method_attributes", "name": "IFRS\\Models\\Currency::attributes", "doc": "&quot;Currency attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Entity.html", "name": "IFRS\\Models\\Entity", "doc": "&quot;Class Entity&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Entity", "fromLink": "IFRS/Models/Entity.html", "link": "IFRS/Models/Entity.html#method_users", "name": "IFRS\\Models\\Entity::users", "doc": "&quot;Users associated with the reporting Entity.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Entity", "fromLink": "IFRS/Models/Entity.html", "link": "IFRS/Models/Entity.html#method_currency", "name": "IFRS\\Models\\Entity::currency", "doc": "&quot;Entity&#039;s Reporting Currency.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Entity", "fromLink": "IFRS/Models/Entity.html", "link": "IFRS/Models/Entity.html#method_reportingPeriods", "name": "IFRS\\Models\\Entity::reportingPeriods", "doc": "&quot;Entity&#039;s Reporting Periods.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Entity", "fromLink": "IFRS/Models/Entity.html", "link": "IFRS/Models/Entity.html#method_attributes", "name": "IFRS\\Models\\Entity::attributes", "doc": "&quot;Entity attributes&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Entity", "fromLink": "IFRS/Models/Entity.html", "link": "IFRS/Models/Entity.html#method_defaultRate", "name": "IFRS\\Models\\Entity::defaultRate", "doc": "&quot;Reporting Currency Default Rate.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/ExchangeRate.html", "name": "IFRS\\Models\\ExchangeRate", "doc": "&quot;Class ExchangeRate&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\ExchangeRate", "fromLink": "IFRS/Models/ExchangeRate.html", "link": "IFRS/Models/ExchangeRate.html#method_currency", "name": "IFRS\\Models\\ExchangeRate::currency", "doc": "&quot;Exchange Rate Currency.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ExchangeRate", "fromLink": "IFRS/Models/ExchangeRate.html", "link": "IFRS/Models/ExchangeRate.html#method_attributes", "name": "IFRS\\Models\\ExchangeRate::attributes", "doc": "&quot;ExchangeRate attributes&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Ledger.html", "name": "IFRS\\Models\\Ledger", "doc": "&quot;Class Ledger&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_post", "name": "IFRS\\Models\\Ledger::post", "doc": "&quot;Create Ledger entries for the Transaction.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_attributes", "name": "IFRS\\Models\\Ledger::attributes", "doc": "&quot;Ledger attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_transaction", "name": "IFRS\\Models\\Ledger::transaction", "doc": "&quot;Transaction&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_postAccount", "name": "IFRS\\Models\\Ledger::postAccount", "doc": "&quot;Ledger Post Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_folioAccount", "name": "IFRS\\Models\\Ledger::folioAccount", "doc": "&quot;Ledger Folio Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_lineItem", "name": "IFRS\\Models\\Ledger::lineItem", "doc": "&quot;Ledger LineItem.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_hashed", "name": "IFRS\\Models\\Ledger::hashed", "doc": "&quot;Hash Ledger contents&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_save", "name": "IFRS\\Models\\Ledger::save", "doc": "&quot;Add Ledger hash.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_contribution", "name": "IFRS\\Models\\Ledger::contribution", "doc": "&quot;Get Account&#039;s contribution to the Transaction total amount.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Ledger", "fromLink": "IFRS/Models/Ledger.html", "link": "IFRS/Models/Ledger.html#method_balance", "name": "IFRS\\Models\\Ledger::balance", "doc": "&quot;Get Account&#039;s balance as at the given date.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/LineItem.html", "name": "IFRS\\Models\\LineItem", "doc": "&quot;Class LineItem&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_ledgers", "name": "IFRS\\Models\\LineItem::ledgers", "doc": "&quot;LineItem Ledgers.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_transaction", "name": "IFRS\\Models\\LineItem::transaction", "doc": "&quot;LineItem Transaction.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_account", "name": "IFRS\\Models\\LineItem::account", "doc": "&quot;LineItem Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_vat", "name": "IFRS\\Models\\LineItem::vat", "doc": "&quot;LineItem VAT.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_vatAccount", "name": "IFRS\\Models\\LineItem::vatAccount", "doc": "&quot;LineItem Vat Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_attributes", "name": "IFRS\\Models\\LineItem::attributes", "doc": "&quot;LineItem attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\LineItem", "fromLink": "IFRS/Models/LineItem.html", "link": "IFRS/Models/LineItem.html#method_save", "name": "IFRS\\Models\\LineItem::save", "doc": "&quot;Check LineItem Vat.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/RecycledObject.html", "name": "IFRS\\Models\\RecycledObject", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\RecycledObject", "fromLink": "IFRS/Models/RecycledObject.html", "link": "IFRS/Models/RecycledObject.html#method_recyclable", "name": "IFRS\\Models\\RecycledObject::recyclable", "doc": "&quot;Recycled object.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\RecycledObject", "fromLink": "IFRS/Models/RecycledObject.html", "link": "IFRS/Models/RecycledObject.html#method_user", "name": "IFRS\\Models\\RecycledObject::user", "doc": "&quot;User responsible for the action.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\RecycledObject", "fromLink": "IFRS/Models/RecycledObject.html", "link": "IFRS/Models/RecycledObject.html#method_attributes", "name": "IFRS\\Models\\RecycledObject::attributes", "doc": "&quot;RecycledObject attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/ReportingPeriod.html", "name": "IFRS\\Models\\ReportingPeriod", "doc": "&quot;Class ReportingPeriod&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method___construct", "name": "IFRS\\Models\\ReportingPeriod::__construct", "doc": "&quot;Construct new Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method_periodCount", "name": "IFRS\\Models\\ReportingPeriod::periodCount", "doc": "&quot;ReportingPeriod Period Count&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method_year", "name": "IFRS\\Models\\ReportingPeriod::year", "doc": "&quot;ReportingPeriod year&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method_periodStart", "name": "IFRS\\Models\\ReportingPeriod::periodStart", "doc": "&quot;ReportingPeriod start string&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method_periodEnd", "name": "IFRS\\Models\\ReportingPeriod::periodEnd", "doc": "&quot;ReportingPeriod end string&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\ReportingPeriod", "fromLink": "IFRS/Models/ReportingPeriod.html", "link": "IFRS/Models/ReportingPeriod.html#method_attributes", "name": "IFRS\\Models\\ReportingPeriod::attributes", "doc": "&quot;ReportingPeriod attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Transaction.html", "name": "IFRS\\Models\\Transaction", "doc": "&quot;Class Transaction&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method___construct", "name": "IFRS\\Models\\Transaction::__construct", "doc": "&quot;Construct new Transaction.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_getType", "name": "IFRS\\Models\\Transaction::getType", "doc": "&quot;Get Human Readable Transaction type&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_getTypes", "name": "IFRS\\Models\\Transaction::getTypes", "doc": "&quot;Get Human Readable Transaction types&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_transactionNo", "name": "IFRS\\Models\\Transaction::transactionNo", "doc": "&quot;The next Transaction number for the transaction type and date.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_lineItems", "name": "IFRS\\Models\\Transaction::lineItems", "doc": "&quot;Transaction Saved Line Items.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_ledgers", "name": "IFRS\\Models\\Transaction::ledgers", "doc": "&quot;Transaction Ledgers.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_currency", "name": "IFRS\\Models\\Transaction::currency", "doc": "&quot;Transaction Currency.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_account", "name": "IFRS\\Models\\Transaction::account", "doc": "&quot;Transaction Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_exchangeRate", "name": "IFRS\\Models\\Transaction::exchangeRate", "doc": "&quot;Transaction Exchange Rate.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_assignments", "name": "IFRS\\Models\\Transaction::assignments", "doc": "&quot;Transaction Assignments.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_isPosted", "name": "IFRS\\Models\\Transaction::isPosted", "doc": "&quot;isPosted analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_isCredited", "name": "IFRS\\Models\\Transaction::isCredited", "doc": "&quot;isCredited analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_getClearedType", "name": "IFRS\\Models\\Transaction::getClearedType", "doc": "&quot;getClearedType analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_getAmount", "name": "IFRS\\Models\\Transaction::getAmount", "doc": "&quot;getAmount analog for Assignment model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_attributes", "name": "IFRS\\Models\\Transaction::attributes", "doc": "&quot;Transaction attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_getLineItems", "name": "IFRS\\Models\\Transaction::getLineItems", "doc": "&quot;Get Transaction LineItems.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_addLineItem", "name": "IFRS\\Models\\Transaction::addLineItem", "doc": "&quot;Add LineItem to Transaction LineItems.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_removeLineItem", "name": "IFRS\\Models\\Transaction::removeLineItem", "doc": "&quot;Remove LineItem from Transaction LineItems.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_save", "name": "IFRS\\Models\\Transaction::save", "doc": "&quot;Relate LineItems to Transaction.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_post", "name": "IFRS\\Models\\Transaction::post", "doc": "&quot;Post Transaction to the Ledger.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_delete", "name": "IFRS\\Models\\Transaction::delete", "doc": "&quot;Check Transaction Relationships.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\Transaction", "fromLink": "IFRS/Models/Transaction.html", "link": "IFRS/Models/Transaction.html#method_checkIntegrity", "name": "IFRS\\Models\\Transaction::checkIntegrity", "doc": "&quot;Check Transaction Integrity.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/User.html", "name": "IFRS\\Models\\User", "doc": "&quot;Class User&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\User", "fromLink": "IFRS/Models/User.html", "link": "IFRS/Models/User.html#method_entity", "name": "IFRS\\Models\\User::entity", "doc": "&quot;User&#039;s Parent Entity.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Models\\User", "fromLink": "IFRS/Models/User.html", "link": "IFRS/Models/User.html#method_attributes", "name": "IFRS\\Models\\User::attributes", "doc": "&quot;User attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Models", "fromLink": "IFRS/Models.html", "link": "IFRS/Models/Vat.html", "name": "IFRS\\Models\\Vat", "doc": "&quot;Class Vat&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Models\\Vat", "fromLink": "IFRS/Models/Vat.html", "link": "IFRS/Models/Vat.html#method_attributes", "name": "IFRS\\Models\\Vat::attributes", "doc": "&quot;Vat attributes.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/AccountSchedule.html", "name": "IFRS\\Reports\\AccountSchedule", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\AccountSchedule", "fromLink": "IFRS/Reports/AccountSchedule.html", "link": "IFRS/Reports/AccountSchedule.html#method___construct", "name": "IFRS\\Reports\\AccountSchedule::__construct", "doc": "&quot;Account Schedule for the account for the period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\AccountSchedule", "fromLink": "IFRS/Reports/AccountSchedule.html", "link": "IFRS/Reports/AccountSchedule.html#method_getTransactions", "name": "IFRS\\Reports\\AccountSchedule::getTransactions", "doc": "&quot;Get Account Schedule Transactions.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/AccountStatement.html", "name": "IFRS\\Reports\\AccountStatement", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\AccountStatement", "fromLink": "IFRS/Reports/AccountStatement.html", "link": "IFRS/Reports/AccountStatement.html#method_buildQuery", "name": "IFRS\\Reports\\AccountStatement::buildQuery", "doc": "&quot;Build Statement Query&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\AccountStatement", "fromLink": "IFRS/Reports/AccountStatement.html", "link": "IFRS/Reports/AccountStatement.html#method_attributes", "name": "IFRS\\Reports\\AccountStatement::attributes", "doc": "&quot;Print Account Statement attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\AccountStatement", "fromLink": "IFRS/Reports/AccountStatement.html", "link": "IFRS/Reports/AccountStatement.html#method___construct", "name": "IFRS\\Reports\\AccountStatement::__construct", "doc": "&quot;Construct Account Statement for the account for the period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\AccountStatement", "fromLink": "IFRS/Reports/AccountStatement.html", "link": "IFRS/Reports/AccountStatement.html#method_getTransactions", "name": "IFRS\\Reports\\AccountStatement::getTransactions", "doc": "&quot;Get Account Statement Transactions.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/BalanceSheet.html", "name": "IFRS\\Reports\\BalanceSheet", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\BalanceSheet", "fromLink": "IFRS/Reports/BalanceSheet.html", "link": "IFRS/Reports/BalanceSheet.html#method___construct", "name": "IFRS\\Reports\\BalanceSheet::__construct", "doc": "&quot;Construct Balance Sheet as at the given end date&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\BalanceSheet", "fromLink": "IFRS/Reports/BalanceSheet.html", "link": "IFRS/Reports/BalanceSheet.html#method_attributes", "name": "IFRS\\Reports\\BalanceSheet::attributes", "doc": "&quot;Print Income Statement attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\BalanceSheet", "fromLink": "IFRS/Reports/BalanceSheet.html", "link": "IFRS/Reports/BalanceSheet.html#method_getSections", "name": "IFRS\\Reports\\BalanceSheet::getSections", "doc": "&quot;Get Balance Sheet Sections.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\BalanceSheet", "fromLink": "IFRS/Reports/BalanceSheet.html", "link": "IFRS/Reports/BalanceSheet.html#method_toString", "name": "IFRS\\Reports\\BalanceSheet::toString", "doc": "&quot;Print Balance Sheet.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/FinancialStatement.html", "name": "IFRS\\Reports\\FinancialStatement", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\FinancialStatement", "fromLink": "IFRS/Reports/FinancialStatement.html", "link": "IFRS/Reports/FinancialStatement.html#method_printSection", "name": "IFRS\\Reports\\FinancialStatement::printSection", "doc": "&quot;Print Statement Section&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\FinancialStatement", "fromLink": "IFRS/Reports/FinancialStatement.html", "link": "IFRS/Reports/FinancialStatement.html#method___construct", "name": "IFRS\\Reports\\FinancialStatement::__construct", "doc": "&quot;Construct Financial Statement for the given period&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\FinancialStatement", "fromLink": "IFRS/Reports/FinancialStatement.html", "link": "IFRS/Reports/FinancialStatement.html#method_attributes", "name": "IFRS\\Reports\\FinancialStatement::attributes", "doc": "&quot;Print Financial Statement attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\FinancialStatement", "fromLink": "IFRS/Reports/FinancialStatement.html", "link": "IFRS/Reports/FinancialStatement.html#method_getSections", "name": "IFRS\\Reports\\FinancialStatement::getSections", "doc": "&quot;Get Statement Sections.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/IncomeStatement.html", "name": "IFRS\\Reports\\IncomeStatement", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\IncomeStatement", "fromLink": "IFRS/Reports/IncomeStatement.html", "link": "IFRS/Reports/IncomeStatement.html#method___construct", "name": "IFRS\\Reports\\IncomeStatement::__construct", "doc": "&quot;Construct Income Statement for the given period.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\IncomeStatement", "fromLink": "IFRS/Reports/IncomeStatement.html", "link": "IFRS/Reports/IncomeStatement.html#method_attributes", "name": "IFRS\\Reports\\IncomeStatement::attributes", "doc": "&quot;Income Statement attributes.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\IncomeStatement", "fromLink": "IFRS/Reports/IncomeStatement.html", "link": "IFRS/Reports/IncomeStatement.html#method_toString", "name": "IFRS\\Reports\\IncomeStatement::toString", "doc": "&quot;Print Income Statement.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Reports", "fromLink": "IFRS/Reports.html", "link": "IFRS/Reports/TrialBalance.html", "name": "IFRS\\Reports\\TrialBalance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Reports\\TrialBalance", "fromLink": "IFRS/Reports/TrialBalance.html", "link": "IFRS/Reports/TrialBalance.html#method___construct", "name": "IFRS\\Reports\\TrialBalance::__construct", "doc": "&quot;Construct Trial Balance&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Reports\\TrialBalance", "fromLink": "IFRS/Reports/TrialBalance.html", "link": "IFRS/Reports/TrialBalance.html#method_getSections", "name": "IFRS\\Reports\\TrialBalance::getSections", "doc": "&quot;Get Trial Balance Sections.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Scopes", "fromLink": "IFRS/Scopes.html", "link": "IFRS/Scopes/EntityScope.html", "name": "IFRS\\Scopes\\EntityScope", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Scopes\\EntityScope", "fromLink": "IFRS/Scopes/EntityScope.html", "link": "IFRS/Scopes/EntityScope.html#method_apply", "name": "IFRS\\Scopes\\EntityScope::apply", "doc": "&quot;Apply the scope to a given Eloquent query builder.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Assigning.html", "name": "IFRS\\Traits\\Assigning", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Assigning", "fromLink": "IFRS/Traits/Assigning.html", "link": "IFRS/Traits/Assigning.html#method_balance", "name": "IFRS\\Traits\\Assigning::balance", "doc": "&quot;Balance Remaining on Transaction.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Buying.html", "name": "IFRS\\Traits\\Buying", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Buying", "fromLink": "IFRS/Traits/Buying.html", "link": "IFRS/Traits/Buying.html#method_save", "name": "IFRS\\Traits\\Buying::save", "doc": "&quot;Validate Buying Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Traits\\Buying", "fromLink": "IFRS/Traits/Buying.html", "link": "IFRS/Traits/Buying.html#method_post", "name": "IFRS\\Traits\\Buying::post", "doc": "&quot;Validate Buying Transaction LineItems.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Clearing.html", "name": "IFRS\\Traits\\Clearing", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Clearing", "fromLink": "IFRS/Traits/Clearing.html", "link": "IFRS/Traits/Clearing.html#method_clearedAmount", "name": "IFRS\\Traits\\Clearing::clearedAmount", "doc": "&quot;Cleared Transaction amount.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Traits\\Clearing", "fromLink": "IFRS/Traits/Clearing.html", "link": "IFRS/Traits/Clearing.html#method_clearances", "name": "IFRS\\Traits\\Clearing::clearances", "doc": "&quot;Cleared Model records.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Fetching.html", "name": "IFRS\\Traits\\Fetching", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Fetching", "fromLink": "IFRS/Traits/Fetching.html", "link": "IFRS/Traits/Fetching.html#method_fetch", "name": "IFRS\\Traits\\Fetching::fetch", "doc": "&quot;Fetch Transactions given the filters&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Finding.html", "name": "IFRS\\Traits\\Finding", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Finding", "fromLink": "IFRS/Traits/Finding.html", "link": "IFRS/Traits/Finding.html#method_find", "name": "IFRS\\Traits\\Finding::find", "doc": "&quot;Instantiate IFRS Transaction with Transaction model from the given Id.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Recycling.html", "name": "IFRS\\Traits\\Recycling", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Recycling", "fromLink": "IFRS/Traits/Recycling.html", "link": "IFRS/Traits/Recycling.html#method_bootRecycling", "name": "IFRS\\Traits\\Recycling::bootRecycling", "doc": "&quot;Model recycling events.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Traits\\Recycling", "fromLink": "IFRS/Traits/Recycling.html", "link": "IFRS/Traits/Recycling.html#method_recycled", "name": "IFRS\\Traits\\Recycling::recycled", "doc": "&quot;Recycled Model records.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Segragating.html", "name": "IFRS\\Traits\\Segragating", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Segragating", "fromLink": "IFRS/Traits/Segragating.html", "link": "IFRS/Traits/Segragating.html#method_bootSegragating", "name": "IFRS\\Traits\\Segragating::bootSegragating", "doc": "&quot;Register EntityScope for Model.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Traits\\Segragating", "fromLink": "IFRS/Traits/Segragating.html", "link": "IFRS/Traits/Segragating.html#method_entity", "name": "IFRS\\Traits\\Segragating::entity", "doc": "&quot;Model&#039;s Parent Entity.&quot;"},
            
            {"type": "Trait", "fromName": "IFRS\\Traits", "fromLink": "IFRS/Traits.html", "link": "IFRS/Traits/Selling.html", "name": "IFRS\\Traits\\Selling", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Traits\\Selling", "fromLink": "IFRS/Traits/Selling.html", "link": "IFRS/Traits/Selling.html#method_save", "name": "IFRS\\Traits\\Selling::save", "doc": "&quot;Validate Selling Transaction Main Account.&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Traits\\Selling", "fromLink": "IFRS/Traits/Selling.html", "link": "IFRS/Traits/Selling.html#method_post", "name": "IFRS\\Traits\\Selling::post", "doc": "&quot;Validate Selling Transaction LineItems.&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/CashPurchase.html", "name": "IFRS\\Transactions\\CashPurchase", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\CashPurchase", "fromLink": "IFRS/Transactions/CashPurchase.html", "link": "IFRS/Transactions/CashPurchase.html#method___construct", "name": "IFRS\\Transactions\\CashPurchase::__construct", "doc": "&quot;Construct new CashPurchase&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\CashPurchase", "fromLink": "IFRS/Transactions/CashPurchase.html", "link": "IFRS/Transactions/CashPurchase.html#method_save", "name": "IFRS\\Transactions\\CashPurchase::save", "doc": "&quot;Validate CashPurchase Main Account&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/CashSale.html", "name": "IFRS\\Transactions\\CashSale", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\CashSale", "fromLink": "IFRS/Transactions/CashSale.html", "link": "IFRS/Transactions/CashSale.html#method___construct", "name": "IFRS\\Transactions\\CashSale::__construct", "doc": "&quot;Construct new CashSale&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\CashSale", "fromLink": "IFRS/Transactions/CashSale.html", "link": "IFRS/Transactions/CashSale.html#method_save", "name": "IFRS\\Transactions\\CashSale::save", "doc": "&quot;Validate CashSale Main Account&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/ClientInvoice.html", "name": "IFRS\\Transactions\\ClientInvoice", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\ClientInvoice", "fromLink": "IFRS/Transactions/ClientInvoice.html", "link": "IFRS/Transactions/ClientInvoice.html#method___construct", "name": "IFRS\\Transactions\\ClientInvoice::__construct", "doc": "&quot;Construct new ClientInvoice&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/ClientReceipt.html", "name": "IFRS\\Transactions\\ClientReceipt", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\ClientReceipt", "fromLink": "IFRS/Transactions/ClientReceipt.html", "link": "IFRS/Transactions/ClientReceipt.html#method___construct", "name": "IFRS\\Transactions\\ClientReceipt::__construct", "doc": "&quot;Construct new ClientReceipt&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\ClientReceipt", "fromLink": "IFRS/Transactions/ClientReceipt.html", "link": "IFRS/Transactions/ClientReceipt.html#method_save", "name": "IFRS\\Transactions\\ClientReceipt::save", "doc": "&quot;Validate ClientReceipt Main Account&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\ClientReceipt", "fromLink": "IFRS/Transactions/ClientReceipt.html", "link": "IFRS/Transactions/ClientReceipt.html#method_post", "name": "IFRS\\Transactions\\ClientReceipt::post", "doc": "&quot;Validate ClientReceipt LineItems&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/ContraEntry.html", "name": "IFRS\\Transactions\\ContraEntry", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\ContraEntry", "fromLink": "IFRS/Transactions/ContraEntry.html", "link": "IFRS/Transactions/ContraEntry.html#method___construct", "name": "IFRS\\Transactions\\ContraEntry::__construct", "doc": "&quot;Construct new ContraEntry&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\ContraEntry", "fromLink": "IFRS/Transactions/ContraEntry.html", "link": "IFRS/Transactions/ContraEntry.html#method_save", "name": "IFRS\\Transactions\\ContraEntry::save", "doc": "&quot;Validate ContraEntry Main Account&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\ContraEntry", "fromLink": "IFRS/Transactions/ContraEntry.html", "link": "IFRS/Transactions/ContraEntry.html#method_post", "name": "IFRS\\Transactions\\ContraEntry::post", "doc": "&quot;Validate ContraEntry LineItems&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/CreditNote.html", "name": "IFRS\\Transactions\\CreditNote", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\CreditNote", "fromLink": "IFRS/Transactions/CreditNote.html", "link": "IFRS/Transactions/CreditNote.html#method___construct", "name": "IFRS\\Transactions\\CreditNote::__construct", "doc": "&quot;Construct new ContraEntry&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/DebitNote.html", "name": "IFRS\\Transactions\\DebitNote", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\DebitNote", "fromLink": "IFRS/Transactions/DebitNote.html", "link": "IFRS/Transactions/DebitNote.html#method___construct", "name": "IFRS\\Transactions\\DebitNote::__construct", "doc": "&quot;Construct new ContraEntry&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/JournalEntry.html", "name": "IFRS\\Transactions\\JournalEntry", "doc": "&quot;Class JournalEntry&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\JournalEntry", "fromLink": "IFRS/Transactions/JournalEntry.html", "link": "IFRS/Transactions/JournalEntry.html#method___construct", "name": "IFRS\\Transactions\\JournalEntry::__construct", "doc": "&quot;Construct new JournalEntry&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/SupplierBill.html", "name": "IFRS\\Transactions\\SupplierBill", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\SupplierBill", "fromLink": "IFRS/Transactions/SupplierBill.html", "link": "IFRS/Transactions/SupplierBill.html#method___construct", "name": "IFRS\\Transactions\\SupplierBill::__construct", "doc": "&quot;Construct new ContraEntry&quot;"},
            
            {"type": "Class", "fromName": "IFRS\\Transactions", "fromLink": "IFRS/Transactions.html", "link": "IFRS/Transactions/SupplierPayment.html", "name": "IFRS\\Transactions\\SupplierPayment", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "IFRS\\Transactions\\SupplierPayment", "fromLink": "IFRS/Transactions/SupplierPayment.html", "link": "IFRS/Transactions/SupplierPayment.html#method___construct", "name": "IFRS\\Transactions\\SupplierPayment::__construct", "doc": "&quot;Construct new ContraEntry&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\SupplierPayment", "fromLink": "IFRS/Transactions/SupplierPayment.html", "link": "IFRS/Transactions/SupplierPayment.html#method_save", "name": "IFRS\\Transactions\\SupplierPayment::save", "doc": "&quot;Validate SupplierPayment Main Account&quot;"},
                    {"type": "Method", "fromName": "IFRS\\Transactions\\SupplierPayment", "fromLink": "IFRS/Transactions/SupplierPayment.html", "link": "IFRS/Transactions/SupplierPayment.html#method_post", "name": "IFRS\\Transactions\\SupplierPayment::post", "doc": "&quot;Validate SupplierPayment LineItems&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


