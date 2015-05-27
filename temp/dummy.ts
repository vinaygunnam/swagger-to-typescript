interface IMember {
	User: IUser;
	Subscription: ISubscription[];
	UserQuestions: IUserPreferenceQuestion[];
}

interface IUser {
	ResourceType: string;
	Email: string;
	Password: string;
	FirstName: string;
	LastName: string;
	Status: string;
	IsLegacyUserName: boolean;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ISubscription {
	ResourceType: string;
	DateEnrolled: Date;
	ExpirationDate: Date;
	NextBillingDate: Date;
	Name: string;
	Description: string;
	IsFree: boolean;
	IsComplimentary: boolean;
	IncludesTrial: boolean;
	IsInTrial: boolean;
	IntervalType: string;
	Status: string;
	StatusReason: string;
	Provider: string;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IUserPreferenceQuestion {
	Type: string;
	Group: string;
	QuestionId: IValueLinkString;
	AnswerId: IValueLinkString;
	FreeText: IValueLinkString;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IObject {
}

interface IKeyValuePairStringObject {
	key: string;
	value: IObject;
}

interface ILink {
	Relation: string;
	HREF: string;
	Title: string;
	Method: string;
	schema: ISchema;
}

interface IValueLinkString {
	Value: string;
	Relation: string;
	HREF: string;
	Title: string;
	Method: string;
	schema: ISchema;
}

interface ISchema {
	title: string;
	description: string;
	$ref: string;
}

interface IAnonymousUser {
	ResourceType: string;
	ID: string;
	Email: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IPasswordChange {
	OldPassword: string;
	NewPassword: string;
	ChangeType: string;
}

interface ITemporaryPasswordRequest {
	Email: string;
}

interface IUserAnswer {
	AnswerID: string;
	FreeText: string;
}

interface IDoLinkActivity {
	CourseID: number;
	ActivityID: number;
	ActivityInstanceID: number;
	SiteID: number;
	UserID: string;
}

interface IDoModuleLinkActivity {
	CourseID: number;
	ActivityID: number;
	ActivityInstanceID: number;
	SiteID: number;
	UserID: string;
}

interface IDoModuleQuizActivity {
	CourseID: number;
	UserID: string;
	Provider: string;
	ProviderID: string;
	Uuid: string;
	SubmittedScore: string;
	TimeSpent: number;
	ActivityMode: string;
	Score: number;
	TotalItems: number;
	Submitted: number;
	Correct: number;
	Incorrect: number;
	PartiallyCorrect: number;
	SiteID: number;
	Unscored: number;
	ActivityInstanceID: number;
}

interface ISiteQuestionAnswer {
	ResourceType: string;
	Group: string;
	ParentID: IValueLinkString;
	ID: string;
	Text: string;
	Type: string;
	Order: number;
	Category: string;
	DefaultAnswer: boolean;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ITimeZoneInformation {
	Text: string;
	Abbreviation: string;
	IsDefault: boolean;
	ID: string;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IModuleAssignment {
	ModuleActivity: IModuleActivity[];
	ResourceType: string;
	ID: number;
	Name: string;
	StartDate: Date;
	EndDate: Date;
	Sequence: number;
	Status: string;
	Errors: string[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IModuleActivity {
	ModuleActivityID: number;
	ProviderID: string;
	Provider: string;
	Name: string;
	Description: string;
	SequencePath: ISequencePath;
	ActivityType: string;
	ResourceType: string;
	ID: number;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ISequencePath {
	Module: number;
	Activity: number;
}

interface ILinkAssignment {
	Activity: ILinkActivity;
	ResourceType: string;
	ID: number;
	Name: string;
	StartDate: Date;
	EndDate: Date;
	Sequence: number;
	Status: string;
	Errors: string[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILinkActivity {
	ActivityID: number;
	Url: string;
	PageNumber: string;
	Instructions: string;
	ResourceType: string;
	ID: number;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IStudentCourseAssignments {
	StudentActivityInstances: IStudentActivityInstance[];
	CompletedAssignmentsCount: number;
	StudentAssignments: IStudentAssignment[];
	Assignments: IAssignment[];
	ResourceType: string;
	Course: ICourse;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IStudentActivityInstance {
	ID: number;
	ActivityID: number;
	StartDate: Date;
	Progress: string;
	CourseID: number;
}

interface IStudentAssignment {
	CompletedActivitiesCount: number;
	IsPastDue: boolean;
	ID: number;
	Name: string;
	StartDate: Date;
	EndDate: Date;
	Sequence: number;
	Status: string;
	Errors: string[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IAssignment {
	ID: number;
	Name: string;
	StartDate: Date;
	EndDate: Date;
	Sequence: number;
	Status: string;
	Errors: string[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ICourse {
	ID: number;
	Name: string;
	StartDate: Date;
	EndDate: Date;
	EnrollmentCode: string;
	EnrollmentUrl: string;
	StudentCount: number;
	Type: string;
	State: string;
	IsDeleted: boolean;
	Section: string;
	Institution: string;
	Description: string;
	Instructor: string;
	CourseAssistant: string;
	TimeZone: ITimeZoneSpec;
	HasAssignment: boolean;
	ResourceType: string;
	CourseQuizScoreTypeValueId: number;
	CourseQuizStudentCheckWorkAllowed: boolean;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ITimeZoneSpec {
	Abbreviation: string;
	DisplayName: string;
	ValueID: number;
	WindowsID: string;
	IsDefault: boolean;
}

interface ICourseEdits {
	AccountId: number;
	Name: string;
	Section: string;
	Institution: string;
	Instructor: string;
	StartDate: Date;
	EndDate: Date;
	TimeZoneValueID: number;
	Description: string;
	CourseId: number;
	CourseAssistant: string;
	CourseQuizScoreTypeValueId: number;
	CourseQuizStudentCheckWorkAllowed: boolean;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	CopyFromCourseId: number;
	Links: ILink[];
}

interface IErrorRequest {
	EventTime: Date;
	Message: string;
	Detail: string;
	TargetSite: string;
	Url: string;
	Username: string;
	EventTypeID: number;
	ApplicationVersion: string;
	OSVersion: string;
	CorrelationID: string;
}

interface ICourseMessages {
	Course: ICourse;
	Messages: IMessage[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IMessage {
	ID: number;
	Title: string;
	Body: string;
	CreateDate: Date;
	ModifyDate: Date;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IMessageBody {
	Title: string;
	Body: string;
}

interface ICourseMessage {
	Course: ICourse;
	ID: number;
	Title: string;
	Body: string;
	CreateDate: Date;
	ModifyDate: Date;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILearningModule {
	ID: number;
	Name: string;
	Description: string;
	ImageID: number;
	Directions: string;
	IsFree: boolean;
	Sequence: number;
	Activities: IModuleActivity[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IReceipt {
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBillingAgreement {
	ResourceType: string;
	RedirectUrl: string;
	Status: string;
	PaymentMethod: IPaymentMethod;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IPaymentMethod {
	ID: number;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBillingAgreementTemplate {
	CustomerID: number;
	ProductID: number;
	PaymentMethod: IPaymentMethodTemplate;
	RedirectUrl: string;
}

interface IPaymentMethodTemplate {
	ResourceType: string;
}

interface IPurchaseTemplate {
	PortalID: number;
	ProductIDs: number[];
	CustomerID: number;
	UserID: string;
	PromotionCode: string;
}

interface IBookProfile {
	ResourceType: string;
	Aggregator: string;
	Edition: string;
	HighPage: number;
	InternationalStandardNumbers: IInternationalStandardNumber[];
	LibraryOfCongressSubjectHeadings: ISubject[];
	PublicationDate: Date;
	PublicationLocation: string;
	PublisherName: string;
	PublisherDetailed: INormalizedTerm;
	PublisherCopyright: string;
	DummyAcademicCategories: ISubject[];
	Series: string;
	Synopsis: string;
	Excerpt: string;
	Title: string;
	Volume: string;
	Contributor: ILibraryContributor[];
	TableOfContents: ISection[];
	PageIndex: IPageIndexItem[];
	IsFree: boolean;
	CoverArt: ILink;
	CoverArtIsGeneric: boolean;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IInternationalStandardNumber {
	Type: string;
	Value: string;
}

interface ISubject {
	ControlNumber: string;
	Field: string;
	SubType: string;
	Value: string;
	ValueFull: string;
	ValueSearch: string;
	ID: number;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface INormalizedTerm {
	Display: string;
	Normalized: string;
}

interface ILibraryContributor {
	ID: number;
	SectionID: number;
	Type: string;
	IsDocumentLevel: boolean;
	NameFirst: string;
	NameMiddle: string;
	NameLast: string;
	NamePrefix: string;
	NameSuffix: string;
	NameFull: string;
	NameSearch: string;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ISection {
	Type: string;
	Title: string;
	Subtitle: string;
	ID: string;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IPageIndexItem {
	Sequence: number;
	SectionID: number;
	ID: number;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBookPage {
	ResourceType: string;
	PageNumber: string;
	Body: string;
	IsPreview: boolean;
	TrackViewMetaData: IDictionaryStringString;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IDictionaryStringString {
}

interface IArticle {
	ResourceType: string;
	Body: string;
	Issue: string;
	IssuePeriod: string;
	PublicationDate: Date;
	PublicationID: number;
	PublicationName: string;
	PublisherName: string;
	PublisherCopyright: string;
	Aggregator: string;
	Title: string;
	Volume: string;
	Contributor: ILibraryContributor[];
	CategoryIDs: number[];
	IsPeerReviewed: boolean;
	IsPreview: boolean;
	TrackViewMetaData: IDictionaryStringString;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IRoot {
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILibrarySearch {
	LibraryItemType: string[];
	BookID: number;
	Keywords: string;
	Title: string;
	TitleMode: string;
	Contributor: string;
	ContributorMode: string;
	Subject: string;
	SubjectMode: string;
	Publisher: string;
	PublisherMode: string;
	PublicationID: number[];
	PublicationName: string[];
	PublicationDateStart: Date;
	PublicationDateEnd: Date;
	PeerReviewedType: string;
	IncludeFreePublicationsOnly: boolean;
	PageNumber: number;
	PageSize: number;
}

interface ILibrarySearchResults {
	ResourceType: string;
	ItemsCount: number;
	ItemsTotal: number;
	Items: ILibrarySearchResult[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILibrarySearchResult {
	ResourceType: string;
	LibraryItemType: string;
	Title: string;
	Contributors: string[];
	ContributorsDetailed: ILibraryContributor[];
	PublicationID: number;
	PublicationName: string;
	Publisher: string;
	PublisherDetailed: INormalizedTerm;
	PublicationDate: string;
	Volume: string;
	Issue: string;
	Period: string;
	Edition: string;
	Subjects: string[];
	SubjectsDetailed: INormalizedTerm[];
	Teaser: string;
	IsPeerReviewed: boolean;
	AccessType: string;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILibrarySearchSummary {
	LibraryItemType: string[];
	Keywords: string;
}

interface ILibrarySearchSummaryResults {
	ResourceType: string;
	Items: ILibrarySearchSummaryResult[];
	TotalItemCount: number;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILibrarySearchSummaryResult {
	ResourceType: string;
	LibraryItemType: string;
	ItemCount: number;
}

interface IMaltSearch {
	ContentID: string;
	ContentType: string;
	LibraryItemType: string[];
}

interface IPublicationSearch {
	ID: number[];
	Query: string;
	PeerReviewedType: string;
	Count: number;
}

interface IPublication {
	ResourceType: string;
	ID: number;
	Name: string;
	IsPeerReviewed: boolean;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IRecentlyViewedContent {
	ResourceType: string;
	Items: IRecentlyViewedContentItem[];
	TotalCount: number;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IRecentlyViewedContentItem {
	ResourceType: string;
	UserID: string;
	CreateDate: Date;
	LibraryItemType: string;
	Title: string;
	Contributors: string[];
	ContributorsDetailed: ILibraryContributor[];
	PublicationID: number;
	PublicationName: string;
	Publisher: string;
	PublisherDetailed: INormalizedTerm;
	PublicationDate: string;
	Volume: string;
	Issue: string;
	Period: string;
	Edition: string;
	Subjects: string[];
	SubjectsDetailed: INormalizedTerm[];
	Teaser: string;
	IsPeerReviewed: boolean;
	AccessType: string;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ICategoryDetail {
	ResourceType: string;
	Description: string;
	ChildCategory: ICategory[];
	Title: string;
	TopicCount: number;
	ItemType: string;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ICategory {
	ResourceType: string;
	Title: string;
	TopicCount: number;
	ItemType: string;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ITopicRandomizer {
	CategoryID: number;
	ExcludeID: number[];
	Count: number;
}

interface ITopic {
	ResourceType: string;
	Title: string;
	Essay: string;
	RelatedTopic: ICategory[];
	ReadingMaterial: ILibraryItem[];
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface ILibraryItem {
	ResourceType: string;
	ItemType: string;
	Title: string;
	Contributor: IValueLinkString[];
	Volume: string;
	Publisher: string;
	PublicationDate: string;
	AccessLevel: string;
	ID: string;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBibliographyIDs {
	Items: ICitationIDs[];
}

interface ICitationIDs {
	ArticleID: string;
	BookID: number;
	PageNumber: string;
	PageID: number;
	URL: string;
}

interface IBibliography {
	ResourceType: string;
	Type: string;
	Heading: string;
	ItemIDs: string;
	Items: IBibliographyItem[];
	Value: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBibliographyItem {
	ResourceType: string;
	ArticleID: string;
	BookID: number;
	PageNumber: string;
	PageID: number;
	Value: string;
}

interface IProject {
	ResourceType: string;
	DateCreated: Date;
	LastActionDate: Date;
	Title: string;
	ItemCount: number;
	ItemTypeCount: IFolderItemTypeCount[];
	IsActive: boolean;
	Notes: string;
	IsCitationCompleteForAllChildExternalItems: boolean;
	ID: number;
	Related: IObject[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IFolderItemTypeCount {
	ItemCount: number;
	ItemType: string;
}

interface IWorkspaceSearch {
	WorkspaceID: number;
	ContentID: string;
	PageID: string;
	SearchTerm: string;
	SortOrder: ISortOrder[];
	ItemType: string[];
	PageNumber: number;
	PageSize: number;
	Domain: string;
	HasSourceMetaData: boolean;
}

interface ISortOrder {
	SortKey: IObject;
	SortDirection: string;
}

interface IWorkspaceSearchResults {
	ResourceType: string;
	ItemsCount: number;
	ItemsTotal: number;
	Items: IProjectItem[];
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectItem {
	Origin: IOrigin;
	Source: ISource;
	DisplayPageNumber: string;
	ItemType: string;
	DateCreated: Date;
	DateModified: Date;
	Title: string;
	ID: number;
	Related: IObject[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IOrigin {
}

interface ISource {
	IsSourceMetadataComplete: boolean;
	IsSourceMetadataCompleteVisible: boolean;
	ContentType: string;
	BookOnWebsiteOriginallyInPrintSource: IBookOnWebsiteOriginallyInPrintTemplate;
	SectionInBookOnWebsiteOriginallyInPrintSource: ISectionInBookOnWebsiteOriginallyInPrintTemplate;
	JournalArticleOnWebsiteOriginallyInPrintSource: IJournalArticleOnWebsiteOriginallyInPrintTemplate;
	JournalArticleOnWebsiteSource: IJournalArticleOnWebsiteTemplate;
	MagazineArticleOnWebsiteOriginallyInPrintSource: IMagazineArticleOnWebsiteOriginallyInPrintTemplate;
	MagazineArticleOnWebsiteSource: IMagazineArticleOnWebsiteTemplate;
	NewspaperArticleOnWebsiteOriginallyInPrintSource: INewspaperArticleOnWebsiteOriginallyInPrintTemplate;
	NewspaperArticleOnWebsiteSource: INewspaperArticleOnWebsiteTemplate;
	PageOnWebsiteSource: IPageOnWebsiteTemplate;
	BookInPrintSource: IBookInPrintTemplate;
	SectionInBookOriginallyInPrintSource: ISectionInBookOriginallyInPrintTemplate;
	JournalArticleInPrintSource: IJournalArticleInPrintTemplate;
	MagazineArticleInPrintSource: IMagazineArticleInPrintTemplate;
	NewspaperArticleInPrintSource: INewspaperArticleInPrintTemplate;
	EBookOriginallyInPrintSource: IEBookOriginallyInPrintTemplate;
	SectionInEBookOnFileSource: ISectionInEBookOnFileTemplate;
}

interface IBookOnWebsiteOriginallyInPrintTemplate {
	PagesCited: string;
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
	WebsiteDatabaseName: string;
	AccessedDate: Date;
	Doi: string;
}

interface ISectionInBookOnWebsiteOriginallyInPrintTemplate {
	ChapterTitle: string;
	Pages: IBookSectionPages;
	PagesCited: string;
	ChapterContributors: IContributorAuthor[];
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
	WebsiteDatabaseName: string;
	AccessedDate: Date;
	Doi: string;
}

interface IJournalArticleOnWebsiteOriginallyInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	JournalTitle: string;
	Volume: string;
	Issue: string;
	PublishedYear: string;
	WebsiteDatabaseName: string;
	AccessedDate: Date;
	Doi: string;
}

interface IJournalArticleOnWebsiteTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	JournalTitle: string;
	Volume: string;
	Issue: string;
	PublishedYear: string;
	AccessedDate: Date;
	Doi: string;
}

interface IMagazineArticleOnWebsiteOriginallyInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	PublishedDate: IPrintDate;
	Volume: string;
	Issue: string;
	WebsiteDatabaseName: string;
	AccessedDate: Date;
	Doi: string;
}

interface IMagazineArticleOnWebsiteTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	Publisher: string;
	PublishedDate: IPrintDate;
	AccessedDate: Date;
	Doi: string;
}

interface INewspaperArticleOnWebsiteOriginallyInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	Edition: string;
	PublishedDate: IPrintDate;
	WebsiteDatabaseName: string;
	AccessedDate: Date;
	Doi: string;
}

interface INewspaperArticleOnWebsiteTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	Publisher: string;
	Edition: string;
	PublishedDate: IPrintDate;
	AccessedDate: Date;
	Doi: string;
}

interface IPageOnWebsiteTemplate {
	Name: string;
	Affiliation: string;
	PageContributors: any[];
	SiteContributors: any[];
	VersionNumber: string;
	CreationDate: Date;
	LastModifiedDate: Date;
	AccessedDate: Date;
	Doi: string;
}

interface IBookInPrintTemplate {
	PagesCited: string;
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
}

interface ISectionInBookOriginallyInPrintTemplate {
	ChapterTitle: string;
	Pages: IBookSectionPages;
	PagesCited: string;
	ChapterContributors: IContributorAuthor[];
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
}

interface IJournalArticleInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	JournalTitle: string;
	Volume: string;
	Issue: string;
	PublishedYear: string;
}

interface IMagazineArticleInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	PublishedDate: IPrintDate;
	Volume: string;
	Issue: string;
}

interface INewspaperArticleInPrintTemplate {
	Pages: IBookSectionPagesContinuous;
	PagesCited: string;
	ArticleAuthors: IContributorAuthor[];
	Title: string;
	Edition: string;
	PublishedDate: IPrintDate;
}

interface IEBookOriginallyInPrintTemplate {
	PagesCited: string;
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
	Doi: string;
	MediumOfPublication: any;
}

interface ISectionInEBookOnFileTemplate {
	ChapterTitle: string;
	Pages: IBookSectionPages;
	PagesCited: string;
	ChapterContributors: IContributorAuthor[];
	BookContributors: any[];
	Publisher: string;
	PublicationLocation: string;
	PublishedYear: string;
	Edition: string;
	Volume: string;
	Doi: string;
	MediumOfPublication: any;
}

interface IContributorSelect {
}

interface IContributorAuthor {
	AuthorLastName: string;
	FirstName: string;
	MiddleName: string;
	Suffix: string;
}

interface IContributorEditor {
	EditorLastName: string;
	FirstName: string;
	MiddleName: string;
	Suffix: string;
}

interface IContributorAssociateEditor {
	AssociateEditorLastName: string;
	FirstName: string;
	MiddleName: string;
	Suffix: string;
}

interface IContributorTranslator {
	TranslatorLastName: string;
	FirstName: string;
	MiddleName: string;
	Suffix: string;
}

interface IContributorCompiler {
	CompilerLastName: string;
	FirstName: string;
	MiddleName: string;
	Suffix: string;
}

interface IContributorOrganization {
	OrganizationName: string;
}

interface IBookSectionPages {
	StartPage: string;
	EndPage: string;
}

interface IBookSectionPagesContinuous {
	PageNonconsecutive: boolean;
	StartPage: string;
	EndPage: string;
}

interface IPrintDate {
	Day: string;
	Month: string;
	Year: string;
}

interface INone {
	NoneHiddenField: string;
}

interface IKindle {
	KindleHiddenField: string;
}

interface INook {
	NookHiddenField: string;
}

interface IEpub {
	EpubHiddenField: string;
}

interface IPdf {
	PdfHiddenField: string;
}

interface IOther {
	OtherHiddenField: string;
	OtherText: string;
}

interface IUnknown {
	UnknownHiddenField: string;
}

interface IExternalItemEdit {
	ExternalItem: IProjectExternalItemTemplate;
	Complete: boolean;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemTemplate {
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface ISourceOfTemplates {
	BookOnWebsiteOriginallyInPrintSource: IBookOnWebsiteOriginallyInPrintTemplate;
	SectionInBookOnWebsiteOriginallyInPrintSource: ISectionInBookOnWebsiteOriginallyInPrintTemplate;
	JournalArticleOnWebsiteOriginallyInPrintSource: IJournalArticleOnWebsiteOriginallyInPrintTemplate;
	JournalArticleOnWebsiteSource: IJournalArticleOnWebsiteTemplate;
	MagazineArticleOnWebsiteOriginallyInPrintSource: IMagazineArticleOnWebsiteOriginallyInPrintTemplate;
	MagazineArticleOnWebsiteSource: IMagazineArticleOnWebsiteTemplate;
	NewspaperArticleOnWebsiteOriginallyInPrintSource: INewspaperArticleOnWebsiteOriginallyInPrintTemplate;
	NewspaperArticleOnWebsiteSource: INewspaperArticleOnWebsiteTemplate;
	PageOnWebsiteSource: IPageOnWebsiteTemplate;
	BookInPrintSource: IBookInPrintTemplate;
	SectionInBookOriginallyInPrintSource: ISectionInBookOriginallyInPrintTemplate;
	JournalArticleInPrintSource: IJournalArticleInPrintTemplate;
	MagazineArticleInPrintSource: IMagazineArticleInPrintTemplate;
	NewspaperArticleInPrintSource: INewspaperArticleInPrintTemplate;
	EBookOriginallyInPrintSource: IEBookOriginallyInPrintTemplate;
	SectionInEBookOnFileSource: ISectionInEBookOnFileTemplate;
}

interface ICopyProjectItemTemplate {
	ItemID: number;
	ParentID: number;
}

interface IMoveProjectItemTemplate {
	ItemID: number;
	ParentID: number;
}

interface IProjectExternalItemValidationTemplate {
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IProjectCitationSourceValidatationResults {
	IsComplete: boolean;
	Errors: IProjectCitationSourceValidatationResultItem[];
}

interface IProjectCitationSourceValidatationResultItem {
	PropertyName: string;
	Message: string;
}

interface IBookshelfItemTemplate {
	ItemType: string;
	ContentID: string;
	PageID: string;
	ParentID: number;
}

interface IHighlightTemplate {
	ItemType: string;
	Color: string;
	Start: number;
	End: number;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface IBibliographyTemplate {
	Title: string;
	Style: string;
	Items: number[];
	ItemType: string;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface IBibliographyPreview {
	Results: IBibliographyResult[];
	FormattedText: string;
	Style: string;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IBibliographyResult {
	ID: number;
	FormattedText: string;
	ErrorDetail: IObject;
}

interface ICitationTemplate {
	ItemType: string;
	Excerpt: string;
	Style: string;
	Start: number;
	End: number;
	SelectionStartsInMiddle: boolean;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface ICitationPreview {
	FormattedText: string;
	Warnings: IErrorResponseDetail[];
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IErrorResponseDetail {
	ResourceType: string;
	Code: string;
	Message: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IResearchPaperSummaryTemplate {
	ItemType: string;
	Title: string;
	DueDate: Date;
	Status: string;
	Topic: string;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface IProjectExternalItemPrefillTemplateWebBookshelfItemTemplate {
	ExternalItem: IWebBookshelfItemTemplate;
	HTMLHead: string;
}

interface IWebBookshelfItemTemplate {
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebBookshelfItemTemplate {
	Resource: IWebBookshelfItemTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemPrefillTemplateWebBookmarkTemplate {
	ExternalItem: IWebBookmarkTemplate;
	HTMLHead: string;
}

interface IWebBookmarkTemplate {
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebBookmarkTemplate {
	Resource: IWebBookmarkTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemPrefillTemplateWebCitationTemplate {
	ExternalItem: IWebCitationTemplate;
	HTMLHead: string;
}

interface IWebCitationTemplate {
	Style: string;
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebCitationTemplate {
	Resource: IWebCitationTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemPrefillTemplateWebCitedPassageTemplate {
	ExternalItem: IWebCitedPassageTemplate;
	HTMLHead: string;
}

interface IWebCitedPassageTemplate {
	Style: string;
	Excerpt: string;
	SelectionStartsInMiddle: boolean;
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebCitedPassageTemplate {
	Resource: IWebCitedPassageTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemPrefillTemplateWebHighlightTemplate {
	ExternalItem: IWebHighlightTemplate;
	HTMLHead: string;
}

interface IWebHighlightTemplate {
	Excerpt: string;
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebHighlightTemplate {
	Resource: IWebHighlightTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectExternalItemPrefillTemplateWebNoteTemplate {
	ExternalItem: IWebNoteTemplate;
	HTMLHead: string;
}

interface IWebNoteTemplate {
	Excerpt: string;
	SourceUri: string;
	Title: string;
	Source: ISourceOfTemplates;
	IsSourceMetaDataComplete: boolean;
	IsSourceMetaDataCompleteVisible: boolean;
	ParentID: number;
}

interface IResourceTypedWebNoteTemplate {
	Resource: IWebNoteTemplate;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectItemField {
	WorkspaceItemID: number;
	Field: string;
	Value: string;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IProjectItemFieldTemplate {
	Field: string;
	Value: string;
}

interface INoteTemplate {
	ItemType: string;
	Excerpt: string;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface IBookmarkTemplate {
	ItemType: string;
	PageID: string;
	ContentID: string;
	ParentID: number;
}

interface IResearchPaperPointItem {
	ID: number;
	WorkspaceItemID: number;
	ParentID: number;
	Text: string;
	SortOrder: number;
	ResourceType: string;
	MetaData: IKeyValuePairStringObject[];
	Links: ILink[];
}

interface IResearchPaperTimeLineItem {
	WorkspaceItemID: number;
	ResearchPaperTimeLineType: string;
	DueDate: Date;
}

