import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CWLModule} from "../cwl/cwl.module";
import {UIModule} from "../ui/ui.module";
import {AppExecutionContextModalComponent} from "./app-execution-context-modal/app-execution-context-modal.component";
import {AppExportModalComponent} from "./app-export-modal/app-export-modal.component";
import {AppValidatorService} from "./app-validator/app-validator.service";
import {AppInfoComponent} from "./components/app-info/app-info.component";
import {CompactListComponent} from "./components/compact-list/compact-list.component";
import {ExpressionInputComponent} from "./components/expression-input/expression-input.component";
import {HintsComponent} from "./components/hint-list/hint-list.component";
import {RequirementInputComponent} from "./components/hint-list/requirement-input.component";
import {KeyValueInputComponent} from "./components/key-value-component/key-value-input.component";
import {KeyValueListComponent} from "./components/key-value-component/key-value-list.component";
import {MapListComponent} from "./components/map-list/map-list.component";
import {QuickPickComponent} from "./components/quick-pick/quick-pick.component";
import {RevisionListComponent} from "./components/revision-list/revision-list.component";
import {SymbolsComponent} from "./components/symbols/symbols.component";
import {InputTypeSelectComponent} from "./components/type-select/type-select.component";
import {ValidationClassDirective} from "./components/validation-preview/validation-class.directive";
import {ValidationPreviewComponent} from "./components/validation-preview/validation-preview.component";
import {ValidationReportComponent} from "./components/validation-report/validation-report.component";
import {CwlSchemaValidationWorkerService} from "./cwl-schema-validation-worker/cwl-schema-validation-worker.service";
import {EditableDirective} from "./directives/editable.directive";
import {EditorLayoutComponent} from "./editor-layout/editor-layout.component";
import {ExpressionEditorComponent} from "./expression-editor/expression-editor.component";
import {ModelExpressionEditorComponent} from "./expression-editor/model-expression-editor.component";
import {DirectoryInputInspectorComponent} from "./inspector-forms/directory-input-inspector/directory-input-inspector.component";
import {FileInputInspectorComponent} from "./inspector-forms/file-input-inspector.component";
import {EditorInspectorContentComponent} from "./inspector/editor-inspector-content.component";
import {EditorInspectorComponent} from "./inspector/editor-inspector.component";
import {EditorInspectorDirective} from "./inspector/editor-inspector.directive";
import {JobImportExportComponent} from "./job-import-export/job-import-export.component";
import {EditorPanelComponent} from "./layout/editor-panel/editor-panel.component";
import {FileDefContentPipe} from "./pipes/file-def-content.pipe";
import {FileDefNamePipe} from "./pipes/file-def-name.pipe";
import {ValidationTextPipe} from "./pipes/validation-text.pipes";
import {CommonDocumentControlsComponent} from "./template-common/common-document-controls/common-document-controls.component";
import {CommonReportPanelComponent} from "./template-common/common-preview-panel/common-report-panel.component";
import {CommonStatusControlsComponent} from "./template-common/common-status-controls/common-status-controls.component";
import {ExecutionModule} from "../execution/execution.module";
import {FileMetadataModalComponent} from "./file-metadata-modal/file-metadata-modal.component";
import {InputValueEditorComponent} from "./input-value-editor/input-value-editor.component";


@NgModule({
    declarations: [
        AppExecutionContextModalComponent,
        AppExportModalComponent,
        AppInfoComponent,
        CommonDocumentControlsComponent,
        CommonReportPanelComponent,
        CommonStatusControlsComponent,
        CompactListComponent,
        DirectoryInputInspectorComponent,
        EditableDirective,
        EditorInspectorComponent,
        EditorInspectorContentComponent,
        EditorInspectorDirective,
        EditorLayoutComponent,
        EditorPanelComponent,
        ExpressionEditorComponent,
        ExpressionInputComponent,
        FileDefContentPipe,
        FileDefNamePipe,
        FileInputInspectorComponent,
        FileMetadataModalComponent,
        HintsComponent,
        InputTypeSelectComponent,
        InputValueEditorComponent,
        JobImportExportComponent,
        JobImportExportComponent,
        KeyValueInputComponent,
        KeyValueListComponent,
        MapListComponent,
        ModelExpressionEditorComponent,
        QuickPickComponent,
        RequirementInputComponent,
        RevisionListComponent,
        SymbolsComponent,
        ValidationClassDirective,
        ValidationPreviewComponent,
        ValidationReportComponent,
        ValidationTextPipe,

    ],
    exports: [
        AppInfoComponent,
        CommonDocumentControlsComponent,
        CommonReportPanelComponent,
        CommonStatusControlsComponent,
        CompactListComponent,
        EditableDirective,
        EditorInspectorComponent,
        EditorInspectorContentComponent,
        EditorInspectorDirective,
        EditorLayoutComponent,
        ExpressionEditorComponent,
        ExpressionInputComponent,
        FileDefContentPipe,
        FileDefNamePipe,
        FileInputInspectorComponent,
        FileMetadataModalComponent,
        HintsComponent,
        InputTypeSelectComponent,
        InputValueEditorComponent,
        KeyValueInputComponent,
        KeyValueListComponent,
        MapListComponent,
        MapListComponent,
        ModelExpressionEditorComponent,
        QuickPickComponent,
        RequirementInputComponent,
        RevisionListComponent,
        SymbolsComponent,
        ValidationClassDirective,
        ValidationPreviewComponent,
        ValidationReportComponent,
    ],
    entryComponents: [
        AppExecutionContextModalComponent,
        AppExportModalComponent,
        EditorInspectorComponent,
        EditorInspectorContentComponent,
        ExpressionEditorComponent,
        FileMetadataModalComponent,
        JobImportExportComponent,
        ModelExpressionEditorComponent,
    ],
    providers: [
        CwlSchemaValidationWorkerService,
        AppValidatorService
    ],
    imports: [
        BrowserModule,
        CWLModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        ExecutionModule
    ]
})
export class EditorCommonModule {

}
