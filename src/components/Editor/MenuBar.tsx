import { useCurrentEditor } from "@tiptap/react";
import { Editor } from "@tiptap/core";

interface MenuBarProps {
  isEditable: boolean;
  setIsEditable: (isEditable: boolean) => void;
}

interface ButtonConfig {
  label: string;
  action: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
  isDisabled?: (editor: Editor) => boolean;
  className?: string;
}

const MenuButton = ({
  editor,
  config,
}: {
  editor: Editor;
  config: ButtonConfig;
}) => {
  const classNames = [
    config.className,
    config.isActive?.(editor) ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      onClick={() => config.action(editor)}
      disabled={config.isDisabled?.(editor)}
      className={classNames}
    >
      {config.label}
    </button>
  );
};

const textStyleButtons: ButtonConfig[] = [
  {
    label: "bold",
    action: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive("bold"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBold().run(),
  },
  {
    label: "italic",
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive("italic"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleItalic().run(),
  },
  {
    label: "strike",
    action: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive("strike"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleStrike().run(),
  },
  {
    label: "code",
    action: (editor) => editor.chain().focus().toggleCode().run(),
    isActive: (editor) => editor.isActive("code"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleCode().run(),
  },
  {
    label: "clear marks",
    action: (editor) => editor.chain().focus().unsetAllMarks().run(),
  },
  {
    label: "clear nodes",
    action: (editor) => editor.chain().focus().clearNodes().run(),
  },
];

const headingButtons: ButtonConfig[] = [
  {
    label: "paragraph",
    action: (editor) => editor.chain().focus().setParagraph().run(),
    isActive: (editor) => editor.isActive("paragraph"),
  },
  {
    label: "h1",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    label: "h2",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 2 }),
  },
  {
    label: "h3",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 3 }),
  },
  {
    label: "h4",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 4 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 4 }),
  },
  {
    label: "h5",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 5 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 5 }),
  },
  {
    label: "h6",
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 6 }).run(),
    isActive: (editor) => editor.isActive("heading", { level: 6 }),
  },
];

const listButtons: ButtonConfig[] = [
  {
    label: "bullet list",
    action: (editor) => editor.chain().focus().toggleBulletList().run(),
    isActive: (editor) => editor.isActive("bulletList"),
  },
  {
    label: "ordered list",
    action: (editor) => editor.chain().focus().toggleOrderedList().run(),
    isActive: (editor) => editor.isActive("orderedList"),
  },
];

const blockButtons: ButtonConfig[] = [
  {
    label: "code block",
    action: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    isActive: (editor) => editor.isActive("codeBlock"),
  },
  {
    label: "blockquote",
    action: (editor) => editor.chain().focus().toggleBlockquote().run(),
    isActive: (editor) => editor.isActive("blockquote"),
  },
  {
    label: "horizontal rule",
    action: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
  {
    label: "hard break",
    action: (editor) => editor.chain().focus().setHardBreak().run(),
  },
];

const historyButtons: ButtonConfig[] = [
  {
    label: "undo",
    action: (editor) => editor.chain().focus().undo().run(),
    isDisabled: (editor) => !editor.can().chain().focus().undo().run(),
  },
  {
    label: "redo",
    action: (editor) => editor.chain().focus().redo().run(),
    isDisabled: (editor) => !editor.can().chain().focus().redo().run(),
  },
];

const colorButtons: ButtonConfig[] = [
  {
    label: "보라색",
    action: (editor) => {
      const currentColor = editor.getAttributes("textStyle").color;
      if (currentColor === "#958DF1") {
        editor.chain().focus().unsetColor().run();
      } else {
        editor.chain().focus().setColor("#958DF1").run();
      }
    },
    isActive: (editor) => editor.isActive("textStyle", { color: "#958DF1" }),
    className: "color-button purple",
  },
  {
    label: "빨간색",
    action: (editor) => {
      const currentColor = editor.getAttributes("textStyle").color;
      if (currentColor === "#F98181") {
        editor.chain().focus().unsetColor().run();
      } else {
        editor.chain().focus().setColor("#F98181").run();
      }
    },
    isActive: (editor) => editor.isActive("textStyle", { color: "#F98181" }),
    className: "color-button red",
  },
  {
    label: "초록색",
    action: (editor) => {
      const currentColor = editor.getAttributes("textStyle").color;
      if (currentColor === "#78D6B3") {
        editor.chain().focus().unsetColor().run();
      } else {
        editor.chain().focus().setColor("#78D6B3").run();
      }
    },
    isActive: (editor) => editor.isActive("textStyle", { color: "#78D6B3" }),
    className: "color-button green",
  },
  {
    label: "주황색",
    action: (editor) => {
      const currentColor = editor.getAttributes("textStyle").color;
      if (currentColor === "#FFBD7A") {
        editor.chain().focus().unsetColor().run();
      } else {
        editor.chain().focus().setColor("#FFBD7A").run();
      }
    },
    isActive: (editor) => editor.isActive("textStyle", { color: "#FFBD7A" }),
    className: "color-button orange",
  },
];

const MenuBar = ({ isEditable, setIsEditable }: MenuBarProps) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar">
      <button
        onClick={() => {
          setIsEditable(!isEditable);
          editor.setEditable(!isEditable);
        }}
        className={isEditable ? "is-active" : ""}
      >
        {isEditable ? "View Mode" : "Edit Mode"}
      </button>

      {isEditable && (
        <>
          {textStyleButtons.map((config, index) => (
            <MenuButton
              key={`text-style-${index}`}
              editor={editor}
              config={config}
            />
          ))}

          {headingButtons.map((config, index) => (
            <MenuButton
              key={`heading-${index}`}
              editor={editor}
              config={config}
            />
          ))}

          {listButtons.map((config, index) => (
            <MenuButton key={`list-${index}`} editor={editor} config={config} />
          ))}

          {blockButtons.map((config, index) => (
            <MenuButton
              key={`block-${index}`}
              editor={editor}
              config={config}
            />
          ))}

          {historyButtons.map((config, index) => (
            <MenuButton
              key={`history-${index}`}
              editor={editor}
              config={config}
            />
          ))}

          {colorButtons.map((config, index) => (
            <MenuButton
              key={`color-${index}`}
              editor={editor}
              config={config}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MenuBar;
