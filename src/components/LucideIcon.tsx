import React from 'react';
import {
  Compass,
  Cpu,
  BarChart3,
  TrendingUp,
  Zap,
  Settings,
  ShieldCheck,
  Search,
  FileText,
  Layers,
  Gauge,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Star,
  ChevronRight,
  Globe,
  Shield,
  HelpCircle,
  Users,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
  ThumbsUp,
  Building2,
  ChevronDown,
  Smile
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: React.Key;
}

export default function LucideIcon({ name, className = '', size }: LucideIconProps) {
  const iconProps = { className, ...(size ? { size } : {}) };

  switch (name) {
    case 'Compass':
      return <Compass {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'BarChart3':
      return <BarChart3 {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    case 'Zap':
      return <Zap {...iconProps} />;
    case 'Settings':
      return <Settings {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Search':
      return <Search {...iconProps} />;
    case 'FileText':
      return <FileText {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'Gauge':
      return <Gauge {...iconProps} />;
    case 'Menu':
      return <Menu {...iconProps} />;
    case 'X':
      return <X {...iconProps} />;
    case 'ArrowRight':
      return <ArrowRight {...iconProps} />;
    case 'Phone':
      return <Phone {...iconProps} />;
    case 'Mail':
      return <Mail {...iconProps} />;
    case 'MapPin':
      return <MapPin {...iconProps} />;
    case 'Clock':
      return <Clock {...iconProps} />;
    case 'Check':
      return <Check {...iconProps} />;
    case 'Star':
      return <Star {...iconProps} />;
    case 'ChevronRight':
      return <ChevronRight {...iconProps} />;
    case 'Globe':
      return <Globe {...iconProps} />;
    case 'Shield':
      return <Shield {...iconProps} />;
    case 'HelpCircle':
      return <HelpCircle {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Award':
      return <Award {...iconProps} />;
    case 'Facebook':
      return <Facebook {...iconProps} />;
    case 'Twitter':
      return <Twitter {...iconProps} />;
    case 'Linkedin':
      return <Linkedin {...iconProps} />;
    case 'ArrowUpRight':
      return <ArrowUpRight {...iconProps} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...iconProps} />;
    case 'ThumbsUp':
      return <ThumbsUp {...iconProps} />;
    case 'Building2':
      return <Building2 {...iconProps} />;
    case 'ChevronDown':
      return <ChevronDown {...iconProps} />;
    case 'Smile':
      return <Smile {...iconProps} />;
    default:
      return <HelpCircle {...iconProps} />;
  }
}
