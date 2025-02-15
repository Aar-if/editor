export const questionSetEditorConfig = {
  context: {
    programId: "",
    contributionOrgId: "",
    user: {
      id: "5a587cc1-e018-4859-a0a8-e842650b9d64",
      fullName: "Test User",
      firstName: "Test",
      lastName: "User",
      orgIds: ["0137541424673095687"],
    },
    identifier: "do_114009589774032896114",
    authToken: " ",
    sid: "iYO2K6dOSdA0rwq7NeT1TDzS-dbqduvV",
    did: "7e85b4967aebd6704ba1f604f20056b6",
    uid: "bf020396-0d7b-436f-ae9f-869c6780fc45",
    channel: "0137541424673095687",
    pdata: {
      id: "dev.dock.portal",
      ver: "2.8.0",
      pid: "creation-portal",
    },
    contextRollup: {
      l1: "01307938306521497658",
    },
    tags: ["01307938306521497658"],
    cdata: [
      {
        id: "01307938306521497658",
        type: "sourcing_organization",
      },
      {
        type: "project",
        id: "ec5cc850-3f71-11eb-aae1-fb99d9fb6737",
      },
      {
        type: "linked_collection",
        id: "do_113140468925825024117",
      },
    ],
    timeDiff: 5,
    objectRollup: {
      l1: "do_113140468925825024117",
      l2: "do_113140468926914560125",
    },
    host: "https://dev.sunbirded.org",
    defaultLicense: "CC BY 4.0",
    endpoint: "/data/v3/telemetry",
    env: "questionset_editor",
    framework: "tn_k-12",
    cloudStorageUrls: [
      "https://s3.ap-south-1.amazonaws.com/ekstep-public-qa/",
      "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/",
      "https://sunbirddev.blob.core.windows.net/sunbird-content-dev/",
      "https://sunbirddevbbpublic.blob.core.windows.net/sunbird-content-staging/",
      "https://obj.stage.sunbirded.org/sunbird-content-staging/",
    ],
    board: "CBSE",
    medium: ["English"],
    gradeLevel: ["Class 1"],
    subject: ["Hindi"],
    additionalCategories: [
      {
        value: "Classroom Teaching Video",
        label: "Classroom Teaching Video",
      },
      {
        value: "Concept Map",
        label: "Concept Map",
      },
      {
        value: "Curiosity Question Set",
        label: "Curiosity Question Set",
      },
      {
        value: "Textbook",
        label: "Textbook",
      },
      {
        value: "Experiential Resource",
        label: "Experiential Resource",
      },
      {
        value: "Explanation Video",
        label: "Explanation Video",
      },
      {
        value: "Focus Spot",
        label: "Focus Spot",
      },
      {
        value: "Learning Outcome Definition",
        label: "Learning Outcome Definition",
      },
      {
        value: "Marking Scheme Rubric",
        label: "Marking Scheme Rubric",
      },
      {
        value: "Pedagogy Flow",
        label: "Pedagogy Flow",
      },
      {
        value: "Lesson Plan",
        label: "Lesson Plan",
      },
      {
        value: "Previous Board Exam Papers",
        label: "Previous Board Exam Papers",
      },
      {
        value: "TV Lesson",
        label: "TV Lesson",
      },
    ],
    labels: {
      save_collection_btn_label: "Save as Draft",
    },
    correctionComments: false,
    sourcingResourceStatus: true,
    cloudStorage: {
      provider: "azure",
      presigned_headers: {
        "x-ms-blob-type": "BlockBlob",
      },
    },
  },
  config: {
    mode: "edit", // edit / review / read / sourcingReview // orgReview
    enableQuestionCreation: true,
    enableAddFromLibrary: true,
    editableFields: {
      sourcingreview: ["instructions"],
      orgreview: ["name", "instructions", "learningOutcome"],
      review: ["name", "description"],
    },
    maxDepth: 4,
    objectType: "QuestionSet",
    primaryCategory: "Practice Question Set",
    isRoot: true,
    iconClass: "fa fa-book",
    hideSubmitForReviewBtn: false,
    children: {
      Question: ["Multiple Choice Question", "Subjective Question"],
    },
    addFromLibrary: false,
    hierarchy: {
      level1: {
        name: "Section",
        type: "Unit",
        mimeType: "application/vnd.sunbird.questionset",
        primaryCategory: "Practice Question Set",
        iconClass: "fa fa-folder-o",
        children: {},
        addFromLibrary: true,
      },
      level2: {
        name: "Sub Section",
        type: "Unit",
        mimeType: "application/vnd.sunbird.questionset",
        primaryCategory: "Practice Question Set",
        iconClass: "fa fa-folder-o",
        children: {
          Question: ["Multiple Choice Question", "Subjective Question"],
        },
        addFromLibrary: true,
      },
      level3: {
        name: "Sub Section",
        type: "Unit",
        mimeType: "application/vnd.sunbird.questionset",
        primaryCategory: "Practice Question Set",
        iconClass: "fa fa-folder-o",
        children: {
          Question: ["Subjective Question"],
        },
      },
    },
    contentPolicyUrl: "/term-of-use.html",
    assetProxyUrl: "/assets/public/",
    commonFrameworkLicenseUrl: "https://creativecommons.org/licenses/",
  },
};
