import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
// import { GRID_COLUMN } from "src/app/shared/models/gridheader.model";
// import { Page } from "src/app/shared/models/page";
// import { CommonService } from "src/app/shared/services/common.service";
// import { AddSignalComponent } from "../signal-add/add-signal.component";
// import { SignalsService } from "src/app/shared/services/signals.service";
// import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
// import { NotificationService } from "src/app/shared/services/notification.service";
// import { UpdateSignalComponent } from "../signal-update/update-signal.component";
// import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
// import { ViewListDialogComponent } from "../view-list-dialog/view-list-dialog.component";
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  styleUrls: ["./signals.component.scss"],
})
export class SignalsComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  public activeTab: string = 'Active Signals'
  public closedTab: string = 'Close Signals'
  public bsModalRef?: BsModalRef;
  public startItem: number;
  public endItem: number;
  public totalItems: number;
  public dataTable: any;
  public itemsPerPage: number;
  public page = new Page();
  public rows: any = [];
  public showLoader: boolean;
  public signalStatus: string[] = ['ACTIVE']

  public tableHeaders_activeSignals: GRID_COLUMN[] = [
    { label: 'Symbol', key: "symbol", type: 'text'},
    { label: 'Stop loss', key: "stop_loss", type: 'text'},
    { label: 'Signal Call Type', key: "signal_call_type", type: 'text'},
    { label: 'Call Price', key: "call_price", type: 'text', },
    { label: 'TP1', key: "tp1", type: 'text'},
    { label: 'Signal Type', key: "is_free", type: 'radio'},
    { label: 'Signal Expiry Time', key: "signal_expiry_time", type: 'date'},
    { label: "Actions", key: "actions", type: 'action', actions: ['fa fa-edit', 'fa fa-eye', 'fa fa-times',]},
  ];

  public tableHeaders_closeSignals: GRID_COLUMN[] = [
    // { label: 'Exchange', key: "exchange", type: 'text'},
    { label: 'Symbol', key: "symbol", type: 'text'},
    { label: 'Stop loss', key: "stop_loss", type: 'text'},
    { label: 'Signal Call Type', key: "signal_call_type", type: 'text'},
    { label: 'Call Price', key: "call_price", type: 'text', },
    { label: 'TP1', key: "tp1", type: 'text'},
    { label: 'Signal Type', key: "is_free", type: 'radio'},
    { label: 'Signal Expiry Time', key: "signal_expiry_time", type: 'date'},
    { label: 'Status', key: "status", type: 'text'},
    { label: "Actions", key: "actions", type: 'action', actions: ['fa fa-eye',]},

  ];

  constructor(
    private cs: CommonService,
    private ss: SignalsService,
    private modalService: BsModalService,
    private ns: NotificationService,
    private cdref: ChangeDetectorRef,
  ) { }
  
  async ngOnInit() {
    let count = await this.ss.getSignalsCount(this.signalStatus);
    this.page.totalElements = count;
    this.startItem = this.cs.startItem;
    this.endItem = this.page.size - 1;
    this.cdref.detectChanges();
    await this.itemPerPageChange(this.cs.itemsPerPage)
  };


  // KEY IS RETURN WITH ORDERING BY ASC || DESC FROM CUSTOM DATATABLE COMPONENT AND PERFORM ORDERING
  handleTableHeaderClick(event: { orderBy: string; orderByAttr: string }) {

  };

  // ==============================Supabase====================
  // Active-Signals:
  async itemPerPageChange(event: number) {
    this.showLoader = true;
    this.rows = [];
    this.page.totalElements = 0;
    this.page.pageNumber = 1;
    this.page.size = event;
    await this.handlePageChanged({ page: this.page.pageNumber, itemsPerPage: this.page.size });
    this.cdref.detectChanges();
    this.showLoader = false;
  };


  // Pagination
  async handlePageChanged(event: { page: number, itemsPerPage: number }) {
    this.page.totalElements = await this.ss.getSignalsCount(this.signalStatus);
    this.page.size = event.itemsPerPage;
    this.page.pageNumber = event.page;
    this.startItem = ((event.page - 1) * event.itemsPerPage);
    this.endItem = event.page * event.itemsPerPage - 1;
    await this.getTableData();
    this.cdref.detectChanges();
  };

  async getTableData() {
    this.showLoader = true;
    let signals_data = await this.ss.getSignalsRange(this.startItem, this.endItem, this.signalStatus)
    this.rows = signals_data.data;
    if (signals_data.error) {
      this.ns.add('danger', signals_data.error.message)
    };
    this.showLoader = false;
  };

  // Change the tab
  async onSelectTab(event: TabDirective) {
    this.page.size = 0;

    if (event.heading === this.activeTab) {
      this.signalStatus = ['ACTIVE'];
    }
    if (event.heading === this.closedTab) {
      this.signalStatus = ['CANCELED','INACTIVE'] ;

    }
    let count = await this.ss.getSignalsCount(this.signalStatus);
    this.page.totalElements = count;
    this.page.size = this.cs.itemsPerPage;
    this.page.pageNumber = 1;
    await this.handlePageChanged({ page: this.page.pageNumber, itemsPerPage: this.page.size });
    this.cdref.detectChanges();
  };

  addSignalPopup() {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Add Signal',
        button: 'Publish',
      },
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered signals-modal',
    };

    this.bsModalRef = this.modalService.show(AddSignalComponent, initialState);
    this.bsModalRef.onHidden?.subscribe(async (reason) => {
      if(reason !== 'no_button'){
        await this.handlePageChanged({ page: this.page.pageNumber, itemsPerPage: this.page.size });
        this.cdref.detectChanges();
        this.staticTabs.tabs[0].active = true;
      }
    });
  };

  updateSignalPopup(data: any) {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Update Signal',
        button: 'Update',
        signalData: data,
      },
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered signals-modal',
    };
    this.bsModalRef = this.modalService.show(UpdateSignalComponent, initialState);
    this.bsModalRef.onHidden?.subscribe(async (reason) => {
      if(reason !== 'no_button'){
        await this.handlePageChanged({ page: this.page.pageNumber, itemsPerPage: this.page.size });
        this.cdref.detectChanges();
      }
    });
  };

  viewSignal(data: any) {
    const initialState: ModalOptions = {
      initialState: {
        title: 'View Signal',
        signalData: data,
      },
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered',
    };
    this.bsModalRef = this.modalService.show(ViewListDialogComponent, initialState);

  };

  closedSignal(data: any) {
    const initialState: ModalOptions = {
      initialState: {
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-outline-success ',
        cancelButtonClass: "btn btn-outline-danger px-5 ",
        message: "Are you sure you want to cancel this signal?",
        notification: "signal closed successfully.",
        confirmButtonText: "Yes,close it!",
        cancelButtonText: "No",
        signalData: data,
        module: 'signals'
      },
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered justify-content-center confirm-dialog-modal',
    };
    this.bsModalRef = this.modalService.show(ConfirmationDialogComponent, initialState);
    this.bsModalRef.onHidden?.subscribe(async (reason) => {
      if(reason !== 'no_button'){
        await this.handlePageChanged({ page: this.page.pageNumber, itemsPerPage: this.page.size });
        this.cdref.detectChanges();
        this.staticTabs.tabs[1].active = true;
      }
    });
  }


}
